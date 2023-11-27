import RandomCardLogic from "../../components/GameModuleComponents/RandomCardLogic.tsx";
import SelectedCard from "../../ui/SelectedCard.tsx";
import {useOption} from "../../store/store.tsx";
import ResultScreen from "../../components/GameModuleComponents/ResultScreen.tsx";

const Round2 = () => {
    const currentOption = useOption(state => state.option)
    const randomOption = useOption(state => state.randomOption)

    return (
        <div className={`w-full h-full grid grid-cols-2 grid-rows-2 content-center place-items-center ${randomOption ? "lg:animate-grid" : ""} lg:grid-cols-[1fr_0fr_1fr] lg:grid-rows-1 lg:gap-4 transition duration-500`}>
            <div className="flex flex-col gap-8 justify-center items-center">
                <h2 className="text-lg text-gray-200 order-2">YOU PICKED</h2>
                <SelectedCard type={currentOption as "rock" | "paper" | "scissors"}/>
            </div>
            <ResultScreen />
            <div className="flex flex-col gap-8 justify-center items-center col-start-2 row-start-1 lg:col-start-3">
                <h2 className="text-lg text-gray-200 order-2">THE HOUSE PICKED</h2>
                <RandomCardLogic />
            </div>
        </div>
    );
};

export default Round2;