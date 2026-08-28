'use client'

import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  const navItems = ['Home', 'Experience', 'Education', 'Skills']

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of [...navItems].reverse()) {
        const id = item.toLowerCase();
        if (id === 'home') {
          if (scrollPosition < window.innerHeight / 2) {
            setActiveSection('home');
            break;
          }
        } else {
          const element = document.getElementById(id);
          if (element && element.offsetTop <= scrollPosition) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
      setIsDark(true)
    }
  }

  return (
    <nav className="fixed w-full z-40 transition-all duration-300 bg-white/90 dark:bg-[#070b12]/90 backdrop-blur-md border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Name */}
          <a href="#" className="font-bold tracking-tight text-forest text-lg uppercase">
            Shiv Desai
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase()
              return (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className={`relative py-2 transition-all duration-300 font-medium text-sm uppercase tracking-wider
                    ${isActive 
                      ? 'text-forest' 
                      : 'text-gray-600 dark:text-slate-400 hover:text-forest dark:hover:text-forest'}
                    group`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-forest transform origin-left
                    transition-transform duration-300 ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100`}>
                  </span>
                </a>
              )
            })}

            {/* Deep Space Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-200 dark:border-slate-700 bg-pale text-forest hover:scale-110 transition-all duration-300 shadow-sm"
                title={isDark ? 'Switch to Light Mode' : 'Switch to Deep Space Dark Mode'}
                aria-label="Toggle Dark Mode"
              >
                {isDark ? (
                  <FaSun className="text-base text-amber-400" />
                ) : (
                  <FaMoon className="text-base text-forest" />
                )}
              </button>
            )}
          </div>

          {/* Mobile Actions: Theme Toggle + Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-gray-200 dark:border-slate-700 bg-pale text-forest transition-all duration-300"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? (
                  <FaSun className="text-base text-amber-400" />
                ) : (
                  <FaMoon className="text-base text-forest" />
                )}
              </button>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 dark:text-slate-300 hover:text-forest transition-all duration-300 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-100 dark:border-slate-800 py-2">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase()
                return (
                  <a
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'text-forest bg-forest/10 font-medium' 
                        : 'text-gray-600 dark:text-slate-300 hover:text-forest hover:bg-forest/5'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}