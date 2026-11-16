import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight': '#02070A',
        'midnight-card': '#08131A',
        'midnight-surface': '#050D12',
        'electric': '#0297DE',
        'cantaloupe': '#FC734D',
        'forest': '#0297DE',
        'forest-dark': '#050D12',
        'light': '#FC734D',
        'pale': '#050D12'
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backgroundImage: {
        'name-gradient': 'linear-gradient(135deg, #0297DE 0%, #FC734D 100%)',
      }
    },
  },
  plugins: [],
}

export default config
