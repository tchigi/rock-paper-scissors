import {useOption, useRoundToggle, useScore} from "../../store/store.tsx";
import {useEffect, useState} from "react";
import comparison from "../../helpers/comparison.ts";
import Button from "../../ui/Button.tsx";
import updateScore from "../../helpers/updateScore.ts";

const ResultScreen = () => {
    const {option, chooseOption, randomOption, chooseRandomOption} = useOption()
    const switchRound = useRoundToggle(state => state.switchRound)
    const incrementScore = useScore(state => state.incrementScore)
    const decrementScore = useScore(state => state.decrementScore)
    const [result, setResult] = useState<string>("")

    useEffect(() => {
        if (randomOption && option) {
            setResult(comparison(option, randomOption))
        }
    }, [randomOption])
    useEffect(() => {
        updateScore(result, incrementScore, decrementScore)
    }, [result]);

    const onClickHandler = () => {
        switchRound(1)
        chooseOption("")
        chooseRandomOption("")
    }

    if (result) {
        return (
            <div className={`w-0 ${result ? "animate-resultAppear" : ""} overflow-hidden col-span-2 flex flex-col justify-center items-center gap-6 lg:col-start-2 lg:col-end-2 transition duration-500`}>
                <h3 className={"text-5xl text-gray-50 whitespace-nowrap uppercase"}>{result}</h3>
                <Button label={"PLAY AGAIN"} theme={"light"} onClick={onClickHandler}/>
            </div>
        )
    }

    return <div/>;
};

export default ResultScreen;