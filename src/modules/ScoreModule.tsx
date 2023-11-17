import Title from "../components/ScoreModuleComponents/Title.tsx";
import Score from "../components/ScoreModuleComponents/Score.tsx";

const ScoreModule = () => {
    return (
        <header
            className="w-10/12 mt-[30px] p-[20px] border-2 border-header-0 rounded self-center flex justify-between items-center sm:p-[30px] sm:w-7/12 sm:rounded-2xl">
            <Title/>
            <Score/>
        </header>
    );
};

export default ScoreModule;