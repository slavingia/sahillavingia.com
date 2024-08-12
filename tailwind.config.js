/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            p: {
              marginTop: '2rem',
              marginBottom: '2rem',
              fontSize: '1.125rem',
              lineHeight: '1.75rem',
              color: 'rgb(55 65 81)', // Tailwind's gray-700
            },
            h1: {
              fontSize: '2.25rem',
              fontWeight: '700',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.875rem',
              fontWeight: '600',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              '&:hover': {
                color: 'currentColor',
              },
            },
            // Add more element styles as needed
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
