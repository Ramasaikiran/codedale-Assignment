/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    50: '#f3f8ff',
                    100: '#e6f0ff',
                    500: '#0a5fff',   // primary accent used for micro highlights
                    700: '#0849cc',
                },
                neutral: {
                    100: '#f7f7f8',
                    200: '#efeff1',
                    400: '#d7d7db',
                    600: '#999aa0',
                    800: '#33343a',
                }
            },
            fontFamily: {
                sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
                mono: ['Roboto Mono', 'monospace']
            },
            boxShadow: {
                card: '0 6px 20px rgba(10,12,16,0.06)',
                floating: '0 12px 30px rgba(10,12,16,0.08)',
            },
            borderRadius: {
                xl: '18px'
            }
        }
    },
    plugins: []
}
