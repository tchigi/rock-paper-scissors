import {MouseEventHandler} from "react";
import ImageRulesSvg from "../../ui/ImageRulesSvg.tsx";
import CloseModalSvg from "../../ui/CloseModalSvg.tsx";

interface Props {
    isActive: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}

const Popup = ({isActive, onClick}: Props) => {
    return (
        //
        <div
            className={`${isActive ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"} backdrop-blur-sm fixed top-0 left-0 w-full h-full transition-all ease-in-out duration-500`}>
            <div
                className={`${isActive ? "translate-y-0 sm:-translate-y-1/2" : "translate-y-full sm:translate-y-full"} transition-all ease-in-out duration-500 absolute w-full h-full bg-gray-100 grid sm:w-[400px] sm:h-[400px] sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:rounded-2xl sm:auto-rows-auto sm:grid-cols-2`}>
                <h2 className="text-3xl text-dark-0 font-bold self-center justify-self-center sm:justify-self-start sm:ml-[30px]">RULES</h2>
                <ImageRulesSvg
                    className={"self-center justify-self-center sm:col-span-2 sm:col-start-1 sm:row-start-2"}/>
                <button onClick={onClick}
                        className="justify-self-center self-center sm:justify-self-end w-[30px] h-[30px] flex items-center justify-center fill-dark-0 hover:fill-gray-500 transition sm:row-start-1 sm:col-start-2 sm:mr-[30px]">
                    <CloseModalSvg/>
                </button>
            </div>
        </div>
    );
};

export default Popup;