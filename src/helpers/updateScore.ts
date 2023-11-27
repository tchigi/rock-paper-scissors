export default function updateScore(result: string, increment: () => void, decrement: () => void) {

    switch (result) {
        case "you win":
            increment()
            break
        case "you lose":
            decrement()
            break
    }
}