/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            keyframes: {
                'width-expand': {
                    '0%': {
                        width: '0%',
                        opacity: '0',
                        transform: 'scaleX(0)'
                    },
                    '100%': {
                        width: '100%',
                        opacity: '1',
                        transform: 'scaleX(1)'
                    }
                }
            },
            animation: {
                'width-expand': 'width-expand 3s cubic-bezier(0.4, 0, 0.2, 1) forwards'
            }
        },
    },
    plugins: [],
} 