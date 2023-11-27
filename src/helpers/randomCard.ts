export default function randomCard() {
    const value = Math.floor(Math.random() * 3)

    switch (value) {
        case 0:
            return "paper"
        case 1:
            return "rock"
        default:
            return "scissors"
    }
}