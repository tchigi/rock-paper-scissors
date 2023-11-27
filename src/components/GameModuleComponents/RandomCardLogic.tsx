import SelectedCard from "../../ui/SelectedCard.tsx";
import randomCard from "../../helpers/randomCard.ts";
import RandomCard from "../../ui/RandomCard.tsx";
import {useEffect} from "react";
import delay from "../../helpers/delay.ts";
import {useOption} from "../../store/store.tsx";

const RandomCardLogic = () => {
    const random = useOption(state => state.randomOption)
    const setRandom = useOption(state => state.chooseRandomOption)

    useEffect(() => {
        delay(2000).then(() => setRandom(randomCard()))
    }, [])

    if (random) {
        return <SelectedCard type={random as "rock" | "paper" | "scissors"}/>
    }

    return <RandomCard/>
};

export default RandomCardLogic;