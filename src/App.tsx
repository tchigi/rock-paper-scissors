import RulesModule from "./modules/RulesModule.tsx";
import GameModule from "./modules/GameModule.tsx";
import ScoreModule from "./modules/ScoreModule.tsx";

function App() {

    return (
        <div className="font-barlow bg-bg min-h-screen flex flex-col gap-[20px]">
            <ScoreModule></ScoreModule>
            <GameModule></GameModule>
            <RulesModule></RulesModule>
        </div>
    )
}

export default App
