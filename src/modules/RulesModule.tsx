import Popup from "../components/RulesModuleComponents/Popup.tsx";
import Button from "../ui/Button.tsx";
import {useState} from "react";

const RulesModule = () => {
    const [isActivePopup, setIsActivePopup] = useState<boolean>(false)

    const onClickHandler = () => {
        setIsActivePopup(prev => !prev)
    }

    return (
        <footer className="mb-[30px] self-center sm:self-end sm:mr-[30px]">
            <Popup isActive={isActivePopup} onClick={onClickHandler}/>
            <Button label={"RULES"} theme={"dark"} size={"sm"} onClick={onClickHandler}/>
        </footer>
    );
};

export default RulesModule;