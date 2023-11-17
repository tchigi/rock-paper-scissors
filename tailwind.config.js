/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                'barlow': ['Barlow Semi Condensed', 'sans-serif']
            },
            backgroundImage: {
                'bg': ['linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))'],
                'rock': ['linear-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))'],
                'paper': ['linear-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))'],
                'scissors': ['linear-gradient(hsl(39, 89%, 49%), hsl(40, 84%, 53%))'],
            },
            textColor: {
                'dark': ['hsl(229, 25%, 31%)'],
                'score': ['hsl(229, 64%, 46%)'],
            },
            fill: {
                'dark': ['hsl(229, 25%, 31%)'],
            },
            borderColor: {
                'header': ['hsl(217, 16%, 45%)'],
            },
            animation: {
                slideIn: "slideIn 0.5s ease-in-out",
                slideOut: "slideOut 0.5s ease-in-out"
            },
            keyframes: {
                slideIn: {
                    "0%": {top: "100%"},
                    "100%": {top: "0px"},
                },
                slideOut: {
                    "0%": {top: "0px"},
                    "100%": {top: "100%"},
                },
            },
        },
    },
    plugins: [],
}

