/** @type {import("tailwindcss").Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                "barlow": ["Barlow Semi Condensed", "sans-serif"]
            },
            backgroundImage: {
                "bg": ["linear-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"],
            },
            textColor: {
                "dark": ["hsl(229, 25%, 31%)"],
                "score": ["hsl(229, 64%, 46%)"],
            },
            fill: {
                "dark": ["hsl(229, 25%, 31%)"],
            },
            borderColor: {
                "header": ["hsl(217, 16%, 45%)"],
            },
            boxShadow: {
                "paper": ["0px 0.5rem 0.5rem 0px hsla(230,89%,62%,0.5) inset, 0px 0.5rem 0.5rem 0px hsla(230,89%,62%,0.5)"],
                "rock": ["0px 0.5rem 0.5rem 0px hsla(349,71%,52%,0.5) inset, 0px 0.5rem 0.5rem 0px hsla(349,71%,52%,0.5)"],
                "scissors": ["0px 0.5rem 0.5rem 0px hsla(39,89%,49%,0.5) inset, 0px 0.5rem 0.5rem 0px hsla(39,89%,49%,0.5)"],
                "empty": ["0px 0.5rem 0.5rem 0px hsla(215,20%,55%,0.5) inset, 0px 0.5rem 0.5rem 0px hsla(215,20%,55%,0.5)"],
            },
            rotate: {
                "rock": ["120deg"],
                "paper": ["0"],
                "scissors": ["240deg"],
            },
            animation: {
                slideIn: "slideIn 0.5s ease-in-out",
                slideOut: "slideOut 0.5s ease-in-out",
                disappear: "disappear 0.5s ease-in-out forwards",
                appear: "appear 0.5s ease-in-out forwards",
                borderDisappear: "borderDisappear 0.5s ease-in-out forwards",
                selected: "selected 0.5s ease-in-out forwards",
                emptyRoll: "emptyRoll 2s linear infinite",
                resultAppear: "resultAppear 0.5s ease-in-out forwards",
                grid: "grid 0.5s ease-in-out forwards",
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
                appear: {
                    "0%": {opacity: "0"},
                    "100%": {opacity: "1"},
                },
                disappear: {
                    "0%": {opacity: "1"},
                    "100%": {opacity: "0", display: "none"},
                },
                selected: {
                    to: {
                        top: "50%",
                        left: "50%",
                    }
                },
                borderDisappear: {
                    to: {
                        border: "none"
                    }
                },
                emptyRoll: {
                    to: {
                        transform: "rotate3d(1,0,0,720deg)"
                    }
                },
                resultAppear: {
                  from: {
                      width: 0
                  },
                  to: {
                      width: "100%"
                  }
                },
                grid: {
                    from: {
                        gridTemplateColumns: "1fr 0fr 1fr",
                    },
                    to: {
                        gridTemplateColumns: "1fr 1fr 1fr",
                    }
                },
            },
        },
    },
    plugins: [],
}

