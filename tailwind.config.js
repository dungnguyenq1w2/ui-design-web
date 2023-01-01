/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                blur: {
                    '0%': { opacity: 0 },
                    '100%': { opacity: 1 },
                },
            },
        },

        plugins: [],
    },
}
