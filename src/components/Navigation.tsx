'use client'

import { useState, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const navItems = ['Home', 'Experience', 'Education', 'Skills']

  useEffect(() => {
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

  return (
    <nav className="bg-[#02070A]/95 backdrop-blur-md border-b border-[#0297DE]/25 fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase()
              return (
                <a
                  key={item}
                  href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                  className={`relative py-2 text-[#94B3C4] hover:text-[#FC734D] transition-all duration-300
                    ${isActive ? 'text-[#0297DE] font-semibold' : ''}
                    group`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#FC734D] transform origin-left
                    transition-transform duration-300 ease-out
                    ${isActive ? 'scale-x-100' : 'scale-x-0'}
                    group-hover:scale-x-100`}>
                  </span>
                </a>
              )
            })}
          </div>

          {/* Desktop LinkedIn Link */}
          <div className="hidden md:flex items-center">
            <a
              href="https://www.linkedin.com/in/shivdesai1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#EBF5FA] hover:text-[#FC734D] border border-[#0297DE]/40 hover:border-[#FC734D] px-3.5 py-1.5 transition-all duration-300"
            >
              <FaLinkedin className="text-base text-[#0297DE]" />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/shivdesai1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-[#0297DE] hover:text-[#FC734D] p-2 transition-colors"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#0297DE] hover:text-[#FC734D] transition-all duration-300 p-2 rounded-lg hover:bg-[#0297DE]/15"
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
          <div className="md:hidden border-t border-[#0297DE]/25 bg-[#02070A]">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.toLowerCase()
                return (
                  <a
                    key={item}
                    href={item === 'Home' ? '#' : `#${item.toLowerCase()}`}
                    className={`block px-3 py-2 rounded-lg transition-all duration-300
                      ${isActive 
                        ? 'text-[#FC734D] bg-[#08131A] font-semibold' 
                        : 'text-[#EBF5FA] hover:text-[#FC734D] hover:bg-[#08131A]/60'}`}
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
