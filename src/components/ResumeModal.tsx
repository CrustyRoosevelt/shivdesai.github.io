'use client';

import { useState, useEffect, useRef } from 'react';
import { FaTimes, FaShieldAlt, FaFileDownload, FaCheckCircle, FaSpinner } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  // Optional worker endpoint URL if using Cloudflare Worker for backend validation
  workerUrl?: string;
  // Cloudflare Turnstile Site Key (defaults to Cloudflare's always-pass testing key if not provided)
  turnstileSiteKey?: string;
}

// Declare turnstile on window for TypeScript
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
          theme?: 'light' | 'dark' | 'auto';
        }
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId?: string) => void;
    };
    onTurnstileLoaded?: () => void;
  }
}

export default function ResumeModal({
  isOpen,
  onClose,
  workerUrl = '',
  // Cloudflare Turnstile Site Key
  turnstileSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '0x4AAAAAAEfpV_wguAIZ53Er',
}: ResumeModalProps) {
  const [status, setStatus] = useState<'idle' | 'verifying' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setStatus('idle');
      setErrorMessage('');
      return;
    }

    // Load Turnstile Script if not already loaded
    const scriptId = 'cloudflare-turnstile-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: turnstileSiteKey,
            theme: 'light',
            callback: (token: string) => {
              handleVerificationSuccess(token);
            },
            'error-callback': () => {
              setStatus('error');
              setErrorMessage('Verification failed. Please try again.');
            },
            'expired-callback': () => {
              setStatus('idle');
              setErrorMessage('Verification expired. Please verify again.');
            },
          });
        } catch {
          // Widget might already be rendering
        }
      }
    };

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        setTimeout(renderWidget, 100);
      };
      document.body.appendChild(script);
    } else if (window.turnstile) {
      setTimeout(renderWidget, 100);
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // cleanup
        }
        widgetIdRef.current = null;
      }
    };
  }, [isOpen, turnstileSiteKey]);

  const handleVerificationSuccess = async (token: string) => {
    setStatus('verifying');
    try {
      if (workerUrl) {
        // Option 1: Validated via Cloudflare Worker backend
        const response = await fetch(workerUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token }),
        });

        if (!response.ok) {
          throw new Error('Verification rejected by security gate.');
        }

        const blob = await response.blob();
        const downloadUrl = window.URL.createObjectURL(blob);
        triggerDownload(downloadUrl, 'Shiv_Desai_Resume.pdf');
      } else {
        // Option 2: Turnstile client verified -> trigger protected download
        triggerDownload('/ShivDesaiResume.pdf', 'ShivDesaiResume.pdf');
      }

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
      }, 2000);
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message || 'Verification error. Please retry.');
    }
  };

  const triggerDownload = (url: string, filename: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-white dark:bg-[#0f1726] border border-forest max-w-md w-full p-6 shadow-2xl relative text-gray-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-forest transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-pale text-forest rounded-full">
            <FaShieldAlt className="text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-forest uppercase tracking-wide">
              Security Verification
            </h3>
            <p className="text-xs text-gray-500 dark:text-slate-400">Anti-Scraper Human Check</p>
          </div>
        </div>

        <p className="text-sm text-gray-600 dark:text-slate-300 mb-6">
          To prevent automated scraping and identity harvesting bots, please complete the quick verification below to download my resume.
        </p>

        {/* Turnstile Container */}
        <div className="flex flex-col items-center justify-center min-h-[90px] py-2 bg-pale border border-gray-100 dark:border-slate-800 rounded mb-4">
          {status === 'idle' && (
            <div ref={turnstileContainerRef} className="my-1"></div>
          )}

          {status === 'verifying' && (
            <div className="flex items-center gap-2 text-forest font-medium text-sm py-3">
              <FaSpinner className="animate-spin text-lg" />
              <span>Verifying and preparing resume...</span>
            </div>
          )}

          {status === 'success' && (
            <div className="flex items-center gap-2 text-forest font-semibold text-sm py-3">
              <FaCheckCircle className="text-lg text-forest" />
              <span>Verified! Download starting...</span>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center p-2">
              <p className="text-red-600 text-sm font-medium mb-2">{errorMessage}</p>
              <button
                onClick={() => {
                  setStatus('idle');
                  if (widgetIdRef.current && window.turnstile) {
                    window.turnstile.reset(widgetIdRef.current);
                  }
                }}
                className="btn btn-secondary text-xs px-3 py-1"
              >
                Try Again
              </button>
            </div>
          )}
        </div>

        {/* Footer Note */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <FaFileDownload /> PDF Document
          </span>
          <span>Protected by Cloudflare Turnstile</span>
        </div>
      </div>
    </div>
  );
}
