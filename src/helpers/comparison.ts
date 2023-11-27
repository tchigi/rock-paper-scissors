export default function comparison(option: string, random: string) {
    if (option === "paper") {
        if (random === "paper") return "draw"
        if (random === "scissors") return "you lose"
        return "you win"
    } else if (option === "scissors") {
        if (random === "paper") return "you win"
        if (random === "scissors") return "draw"
        return "you lose"
    } else {
        if (random === "paper") return "you lose"
        if (random === "scissors") return "you win"
        return "draw"
    }
}