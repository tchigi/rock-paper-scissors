import RulesModule from "./modules/RulesModule.tsx";
import GameModule from "./modules/GameModule.tsx";
import ScoreModule from "./modules/ScoreModule.tsx";

function App() {

    return (
        <div className="font-barlow bg-bg h-screen flex flex-col">
            <ScoreModule></ScoreModule>
            <GameModule></GameModule>
            <RulesModule></RulesModule>
        </div>
    )
}

export default App
