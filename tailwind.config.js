import { nextui } from '@nextui-org/react'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        type: 'type 3s ease-in-out .8s infinite alternate both',
      },
      keyframes: {
        type: {
          '0%': { transform: 'translateX(0ch)' },
          '3%': { transform: 'translateX(0ch)' },
          '3%, 6%': { transform: 'translateX(1ch)' },
          '9%, 12%': { transform: 'translateX(2ch)' },
          '15%, 18%': { transform: 'translateX(3ch)' },
          '21%, 24%': { transform: 'translateX(4ch)' },
          '27%, 30%': { transform: 'translateX(5ch)' },
          '33%, 36%': { transform: 'translateX(6ch)' },
          '39%, 42%': { transform: 'translateX(7ch)' },
          '45%, 48%': { transform: 'translateX(8ch)' },
          '51%, 54%': { transform: 'translateX(9ch)' },
          '57%, 60%': { transform: 'translateX(10ch)' },
          '63%, 66%': { transform: 'translateX(11ch)' },
          '69%, 72%': { transform: 'translateX(12ch)' },
          '75%, 78%': { transform: 'translateX(13ch)' },
          '81%, 84%': { transform: 'translateX(14ch)' },
          '87%, 90%': { transform: 'translateX(15ch)' },
          '93%, 100%': { transform: 'translateX(16ch)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
}

