import IconRockSvg from "../assets/svg/IconRockSvg.tsx";
import IconPaperSvg from "../assets/svg/IconPaperSvg.tsx";
import IconScissorsSvg from "../assets/svg/IconScissorsSvg.tsx";

interface Props {
    type: "rock" | "paper" | "scissors"
}

const SelectedCard = ({type}: Props) => {
    const types = {
        "rock": "[border:hsl(349,71%,52%)_0.75rem_solid] sm:[border:hsl(349,71%,52%)_clamp(1rem,1.5vw,2rem)_solid] shadow-rock",
        "paper": "[border:hsl(230,89%,62%)_0.75rem_solid] sm:[border:hsl(230,89%,62%)_clamp(1rem,1.5vw,2rem)_solid] shadow-paper",
        "scissors": "[border:hsl(39,89%,49%)_0.75rem_solid] sm:[border:hsl(39,89%,49%)_clamp(1rem,1.5vw,2rem)_solid] shadow-scissors",
    }
    const images = {
        "rock": <IconRockSvg/>,
        "paper": <IconPaperSvg/>,
        "scissors": <IconScissorsSvg/>,
    }

    return (
        <div className={`${types[type]} w-[7.5rem] h-[7.5rem] sm:w-[clamp(10rem,15vw,20rem)] sm:h-[clamp(10rem,15vw,20rem)] rounded-full bg-gray-50 flex items-center justify-center animate-appear duration-500`}>
            {images[type]}
        </div>
    );
};

export default SelectedCard;