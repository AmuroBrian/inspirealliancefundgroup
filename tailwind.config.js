/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/app/**/*.{js,jsx,ts,tsx}',
        './src/components/**/*.{js,jsx,ts,tsx}',
        './src/pages/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            keyframes: {
                shine: {
                    '0%': { transform: 'translateX(-100%)' },
                    '50%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
            },
            animation: {
                shine: 'shine 2s ease-in-out infinite',
            },
        },
    },
    plugins: [],
} 