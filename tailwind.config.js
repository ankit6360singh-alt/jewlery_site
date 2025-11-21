/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FDF2F8', // Soft Pink/Peach
                secondary: '#2D2D2D', // Deep Charcoal
                accent: '#C5A059', // Gold/Rose Gold
                'accent-hover': '#B08D4B',
                'soft-white': '#FAFAFA',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Lato', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "url('/assets/hero-bg.png')", // Placeholder
            }
        },
    },
    plugins: [],
}
