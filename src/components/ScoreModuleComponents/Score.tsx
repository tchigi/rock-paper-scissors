import {useScore} from "../../store/store.tsx";

const Score = () => {
    const score = useScore(state => state.score)

    return (
        <div className="bg-gray-50 p-[0.5rem_1rem] h-full rounded flex flex-col items-center justify-center sm:rounded-lg sm:p-[1rem_2rem]">
            <p className="text-score-0 text-xs sm:text-lg">SCORE</p>
            <p className="text-dark-0 text-3xl sm:text-6xl">{score}</p>
        </div>
    );
};

export default Score;