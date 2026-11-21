import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./constants/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                'cyan-blue': '#041121',
                'tiffany': '#57cfcb',
            },
            borderRadius: {
                '4xl': '40px', 
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0',
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)',
                    },
                    to: {
                        height: '0',
                    },
                },
                scroll: {
                    to: {
                      transform: 'translate(calc(-50% - 0.5rem))',
                    },
                  },
            },
            animation: {
                'accordion-down': 'accordion-down 0.5s ease-out',
                'accordion-up': 'accordion-up 0.5s ease-out',
                scroll: 'scroll var(--animation-duration, 0s) var(--animation-direction, forwards) linear infinite',
            },
            // Добавляем новое свойство fontFamily
            fontFamily: {
              saira: ['Saira', 'sans-serif'], // создаем набор классов с использованием Saira
              roboto: ['Roboto', 'sans-serif'], // существующее определение
              archivoBlack: ['Archivo Black', 'sans-serif'], // добавляем Arquivo Black
            },
        },
    },
    plugins: [],
} satisfies Config;