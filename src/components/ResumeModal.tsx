'use client';

import { useState, useEffect, useRef } from 'react';
import { FaTimes, FaShieldAlt, FaFileDownload, FaCheckCircle, FaSpinner } from 'react-icons/fa';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  workerUrl?: string;
  turnstileSiteKey?: string;
}

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

    const scriptId = 'cloudflare-turnstile-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    const renderWidget = () => {
      if (window.turnstile && turnstileContainerRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
            sitekey: turnstileSiteKey,
            theme: 'dark',
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
      script.crossOrigin = 'anonymous';
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
    if (!token || typeof token !== 'string' || token.trim().length < 10) {
      setStatus('error');
      setErrorMessage('Invalid verification token. Please try again.');
      return;
    }

    setStatus('verifying');
    try {
      if (workerUrl) {
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
        window.URL.revokeObjectURL(downloadUrl);
      } else {
        // Obfuscate static asset path from simple regex bundle scrapers
        const encodedPath = 'L1NoaXZEZXNhaVJlc3VtZS5wZGY=';
        const targetPath = window.atob(encodedPath);
        triggerDownload(targetPath, 'Shiv_Desai_Resume.pdf');
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
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="bg-[#08131A] border border-[#0297DE] max-w-md w-full p-6 shadow-2xl relative text-[#EBF5FA]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#94B3C4] hover:text-[#FC734D] transition-colors"
          aria-label="Close modal"
        >
          <FaTimes className="text-xl" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 bg-[#02070A] text-[#FC734D] rounded-full border border-[#0297DE]/40">
            <FaShieldAlt className="text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0297DE] uppercase tracking-wide">
              Security Verification
            </h3>
            <p className="text-xs text-[#FC734D]">Anti-Scraper Human Check</p>
          </div>
        </div>

        <p className="text-sm text-[#94B3C4] mb-6">
          To prevent automated scraping and identity harvesting bots, please complete the quick verification below to download my resume.
        </p>

        {/* Turnstile Container */}
        <div className="flex flex-col items-center justify-center min-h-[90px] py-2 bg-[#02070A] border border-[#0297DE]/30 rounded mb-4">
          {status === 'idle' && (
            <div ref={turnstileContainerRef} className="my-1"></div>
          )}

          {status === 'verifying' && (
            <div className="flex items-center gap-2 text-[#FC734D] font-medium text-sm py-3">
              <FaSpinner className="animate-spin text-lg" />
              <span>Verifying and preparing resume...</span>
            </div>
          )}

          {status === 'success' && (
            <div className="flex items-center gap-2 text-[#FC734D] font-semibold text-sm py-3">
              <FaCheckCircle className="text-lg text-[#FC734D]" />
              <span>Verified! Download starting...</span>
            </div>
          )}

          {status === 'error' && (
            <div className="text-center p-2">
              <p className="text-[#FC734D] text-sm font-medium mb-2">{errorMessage}</p>
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
        <div className="flex items-center justify-between text-xs text-[#94B3C4] pt-2 border-t border-[#0297DE]/20">
          <span className="flex items-center gap-1 text-[#FC734D]">
            <FaFileDownload /> PDF Document
          </span>
          <span>Protected by Cloudflare Turnstile</span>
        </div>
      </div>
    </div>
  );
}
