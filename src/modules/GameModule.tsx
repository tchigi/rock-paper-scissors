import Round1 from "../vidgets/GameModuleVidgets/Round1.tsx";
import Round2 from "../vidgets/GameModuleVidgets/Round2.tsx";
import {useRoundToggle} from "../store/store.tsx";

const GameModule = () => {
    const round = useRoundToggle(state => state.round)

    function roundHandler() {
        switch (round) {
            case 1: return <Round1/>
            case 2: return <Round2/>
        }
    }

    return (
        <main className="grow self-center w-11/12 sm:w-7/12 flex justify-center items-center">
            {roundHandler()}
        </main>
    );
};

export default GameModule;