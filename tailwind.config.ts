import type { Config } from 'tailwindcss';

// Design tokens là CSS variables (xem src/styles/tokens.css) — Tailwind chỉ bắc cầu tên.
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: 'var(--paper)',
        'paper-2': 'var(--paper-2)',
        ink: 'var(--ink)',
        'ink-soft': 'var(--ink-soft)',
        'ink-faint': 'var(--ink-faint)',
        line: 'var(--line)',
        'line-2': 'var(--line-2)',
        cobalt: {
          DEFAULT: 'var(--cobalt)',
          deep: 'var(--cobalt-deep)',
          wash: 'var(--cobalt-wash)',
        },
        orange: {
          DEFAULT: 'var(--orange)',
          wash: 'var(--orange-wash)',
        },
        green: { DEFAULT: 'var(--green)', wash: 'var(--green-wash)' },
        yellow: { DEFAULT: 'var(--yellow)', wash: 'var(--yellow-wash)' },
        red: 'var(--red)',
        purple: { DEFAULT: 'var(--purple)', wash: 'var(--purple-wash)' },
        navy: 'var(--navy)',
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', 'sans-serif'],
        serif: ['Lora', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        xl: '12px',
        '2xl': '16px',
        pill: '100px',
      },
      boxShadow: {
        card: 'var(--shadow)',
        lg: 'var(--shadow-lg)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        ping: {
          '0%': { transform: 'scale(.6)', opacity: '.7' },
          '100%': { transform: 'scale(2.1)', opacity: '0' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 600ms cubic-bezier(0.22,1,0.36,1) both',
        ping: 'ping 2.4s ease-out infinite',
        'radar-sweep': 'radar-sweep 3.4s linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
