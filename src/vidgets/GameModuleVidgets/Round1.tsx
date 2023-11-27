import GameCard from "../../ui/GameCard.tsx";
import {useOption, useRoundToggle} from "../../store/store.tsx";
import {useEffect} from "react";

const Round1 = () => {
    const currentOption = useOption(state => state.option)
    const switchRound = useRoundToggle(state => state.switchRound)

    const animationSelectedCurrentOption = () => {
        if (currentOption) {
            switch (currentOption) {
                case "paper":
                    return "[&>*:nth-child(1)]:animate-selected animate-borderDisappear"
                case "scissors":
                    return "[&>*:nth-child(2)]:animate-selected animate-borderDisappear"
                case "rock":
                    return "[&>*:nth-child(3)]:animate-selected animate-borderDisappear"
            }
        }
    }

    useEffect(() => {
        if (currentOption) {
            setTimeout(() => {
                switchRound(2)
            }, 1000)
        }
    }, [currentOption])

    return (
        <figure className="w-full h-[22rem] sm:h-[26rem] flex items-center justify-center overflow-hidden animate-appear">
            <div className={`w-48 h-48 sm:w-60 sm:h-60 relative border-gray-500 border border-solid rounded-full
            [&>*:nth-child(n)]:absolute [&>*:nth-child(n)]:-translate-y-1/2 [&>*:nth-child(n)]:-translate-x-1/2 duration-500 
            [&>*:nth-child(1)]:top-[calc(6rem_+_(6rem_*_sin(270deg)))] [&>*:nth-child(1)]:left-[calc(6rem_+_(6rem_*_cos(270deg)))]
            [&>*:nth-child(2)]:top-[calc(6rem_+_(6rem_*_sin(30deg)))] [&>*:nth-child(2)]:left-[calc(6rem_+_(6rem_*_cos(30deg)))]
            [&>*:nth-child(3)]:top-[calc(6rem_+_(6rem_*_sin(150deg)))] [&>*:nth-child(3)]:left-[calc(6rem_+_(6rem_*_cos(150deg)))]
            sm:[&>*:nth-child(1)]:top-[calc(7.5rem_+_(7.5rem_*_sin(270deg)))] sm:[&>*:nth-child(1)]:left-[calc(7.5rem_+_(7.5rem_*_cos(270deg)))]
            sm:[&>*:nth-child(2)]:top-[calc(7.5rem_+_(7.5rem_*_sin(30deg)))] sm:[&>*:nth-child(2)]:left-[calc(7.5rem_+_(7.5rem_*_cos(30deg)))]
            sm:[&>*:nth-child(3)]:top-[calc(7.5rem_+_(7.5rem_*_sin(150deg)))] sm:[&>*:nth-child(3)]:left-[calc(7.5rem_+_(7.5rem_*_cos(150deg)))]
            ${animationSelectedCurrentOption()}
            `}>
                <GameCard type={"paper"}/>
                <GameCard type={"scissors"}/>
                <GameCard type={"rock"}/>
            </div>
        </figure>
    );
};

export default Round1;