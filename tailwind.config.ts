import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        // Green that stays legible as text on the current theme
        accent: 'hsl(var(--accent))',
        // Fixed brand surfaces, identical in both themes
        ink: '#0F1311',
        paper: '#F3F1EA',
        // Brand green, built around the Angler mark (#5DC22E). 700 is the darkest step that is
        // still clearly "the logo green" and passes AA as text on paper.
        brand: {
          300: '#A6E07F',
          400: '#7ACE4A',
          500: '#5DC22E',
          600: '#46A022',
          700: '#33741A',
          800: '#27591A',
          900: '#1C4013',
        },
        // Deep surface green in the same hue family as the mark
        forest: {
          DEFAULT: '#17391C',
          deep: '#0F2713',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'Times New Roman', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '3px',
        lg: '4px',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  corePlugins: { container: false },
  plugins: [],
}

export default config
