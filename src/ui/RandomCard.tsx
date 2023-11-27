import IconQuestionMarkSvg from "../assets/svg/IconQuestionMarkSvg.tsx";

const RandomCard = () => {
    return (
        <figure className={`w-[7.5rem] h-[7.5rem] sm:w-[clamp(10rem,15vw,20rem)] sm:h-[clamp(10rem,15vw,20rem)] animate-emptyRoll relative [transform-style:preserve-3d] [&>*:nth-child(n)]:absolute [&>*:nth-child(n)]:inset-1/2 [&>*:nth-child(n)]:rounded-full [&>*:nth-child(n)]:w-[7.5rem] [&>*:nth-child(n)]:h-[7.5rem] sm:[&>*:nth-child(n)]:w-[clamp(10rem,15vw,20rem)] sm:[&>*:nth-child(n)]:h-[clamp(10rem,15vw,20rem)] animate-appear duration-500`}>
            <div className={"[border:hsl(215,20%,65%)_0.75rem_solid] sm:[border:hsl(215,20%,65%)_clamp(1rem,1.5vw,2rem)_solid] rounded-full bg-gray-50 flex items-center justify-center [transform:translate3d(-50%,-50%,5px)] shadow-empty"}>
                <IconQuestionMarkSvg/>
            </div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,4px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,3px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,2px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,1px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,0px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,-1px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,-2px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,-3px)]"}></div>
            <div className={"bg-[hsl(215,20%,55%)] [transform:translate3d(-50%,-50%,-4px)]"}></div>
            <div className={"[border:hsl(215,20%,65%)_0.75rem_solid] sm:[border:hsl(215,20%,65%)_clamp(1rem,1.5vw,2rem)_solid] rounded-full bg-gray-50 flex items-center justify-center [transform:translate3d(-50%,-50%,-5px)] shadow-empty"}>
                <IconQuestionMarkSvg/>
            </div>
        </figure>
    );
};

export default RandomCard;