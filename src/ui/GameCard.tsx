import IconPaperSvg from "../assets/svg/IconPaperSvg.tsx";
import IconRockSvg from "../assets/svg/IconRockSvg.tsx";
import IconScissorsSvg from "../assets/svg/IconScissorsSvg.tsx";
import {useOption} from "../store/store.tsx";

interface Props {
    type: "rock" | "paper" | "scissors"
}

const GameCard = ({type}: Props) => {
    const {option, chooseOption} = useOption()
    const types = {
        "rock": "[border:hsl(349,71%,52%)_0.75rem_solid] sm:[border:hsl(349,71%,52%)_1rem_solid] shadow-rock",
        "paper": "[border:hsl(230,89%,62%)_0.75rem_solid] sm:[border:hsl(230,89%,62%)_1rem_solid] shadow-paper",
        "scissors": "[border:hsl(39,89%,49%)_0.75rem_solid] sm:[border:hsl(39,89%,49%)_1rem_solid] shadow-scissors",
    }
    const images = {
        "rock": <IconRockSvg/>,
        "paper": <IconPaperSvg/>,
        "scissors": <IconScissorsSvg/>,
    }

    const onClickHandler = () => {
        chooseOption(type)
    }

    return (
        <button className={`${types[type]} ${option && option !== type ? "animate-disappear disabled:pointer-events-none" : ""} w-[7.5rem] h-[7.5rem] sm:w-40 sm:h-40 rounded-full bg-gray-50 flex items-center justify-center duration-500 hover:scale-105 active:scale-110`}
            onClick={onClickHandler} disabled={!!(option && option !== type)}>
            {images[type]}
        </button>
    );
};

export default GameCard;