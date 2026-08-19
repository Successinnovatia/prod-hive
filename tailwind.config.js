/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        success: 'hsl(var(--success) / <alpha-value>)',
        warning: 'hsl(var(--warning) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        ring: 'hsl(var(--ring) / <alpha-value>)',
        elevated: 'hsl(var(--elevated) / <alpha-value>)',
        footer: {
          DEFAULT: 'hsl(var(--footer) / <alpha-value>)',
          foreground: 'hsl(var(--footer-foreground) / <alpha-value>)',
        },
        cta: {
          DEFAULT: '#0B1120',
          foreground: '#F8FAFC',
        },
        brand: {
          50: 'hsl(var(--primary) / 0.08)',
          100: 'hsl(var(--primary) / 0.14)',
          200: 'hsl(var(--primary) / 0.22)',
          300: 'hsl(var(--cyan) / 0.45)',
          400: 'hsl(var(--cyan))',
          500: 'hsl(var(--primary))',
          600: 'hsl(var(--primary))',
          700: 'hsl(221 83% 45%)',
          800: 'hsl(var(--primary))',
          900: 'hsl(var(--foreground))',
        },
      },
      boxShadow: {
        glow: '0 8px 24px -8px hsl(var(--primary) / 0.45)',
      },
      transitionDuration: {
        DEFAULT: '180ms',
        180: '180ms',
      },
    },
  },
  plugins: [],
};
