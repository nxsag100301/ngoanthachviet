/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate'

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFEDD4',
          300: '#FFC68B',
          600: '#E68D09',
          700: '#DA8200',
          800: '#B56400',
          900: '#5F2900',
          1000: '#3F2500',
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        gray: {
          25: '#F9F9FC',
          50: '#F0F1F3',
          100: '#E0E2E7',
          200: '#C2C6CE',
          400: '#858D9D'
        },
        black: {
          100: '#D2D2D5',
          200: '#A5A5AB',
          400: '#4A4C56',
          500: '#1D1F2C',
          900: '#030304'
        },
        error: '#DC2626',
        errorbg: '#FEECEE',
        success: '#009800',
        successbg: '#EEFFE2',
        warning: '#F2B600',
        warningbg: '#FFFBEA',
        blue: '#423FFF',
        bluebg: '#E7E7F6',
        whitebg: '#F0F0F0',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))'
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      penumbra: ['"UTM Penumbra"', 'sans-serif'],
      aquarelle: ['"UTM Aquarelle"', 'sans-serif']
    },
    backgroundImage: {
      mountain: "url('/assets/images/mountain.png')",
      mountain2: "url('/assets/images/mountain2.png')",
      footer: "url('/assets/images/footer.png')",
      program: "url('/assets/images/program.png')",
      contact: "url('/assets/images/mountain-contact.png')"
    }
    // screens: {
    //   xs: '480px',
    //   sm: '640px',
    //   md: '768px',
    //   lg: '1024px',
    //   xl: '1280px',
    //   '2xl': '1440px'
    // }
  },
  plugins: [animate]
}
