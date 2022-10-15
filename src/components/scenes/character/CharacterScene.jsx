import retrieveCharacter from "../../../data/charactersJson";
import "../../../styles/CharacterScene.css"
import {useDispatch, useSelector} from "react-redux";
import PixelButton from "../../common/PixelButton";
import {parseATK, parseDEF, parseHP, parseSPD} from "../../../utils/maths";
import AbilityDescription from "./AbilityDescription";
import {StatBlock} from "./StatBlock";

export default function CharacterScene() {
    const id = useSelector((state) => state.character)
    const player = useSelector((state) => state.player)
    const character = retrieveCharacter(id)
    const dispatch = useDispatch()

    console.log(id, character)
    const goBack = () => dispatch({type: "scene", payload: "Characters"})

    const wrapperClasses = [
        "gradient-base",
        "p-0"
    ].join(" ")

    const characterClasses = [
        `bg-${id}`,
        "character-scene",
        "flex",
        "flex-col",
        "justify-start",
        "items-start"
    ].join(" ")

    return (
        <div className={wrapperClasses}>
            <div className={characterClasses}>
                <div className={"w-[90px] ml-2"}>
                    <PixelButton text={"← Back"} type={"button"} callback={goBack}/>
                </div>
                <StatBlock stat={"HP"} base={character.hitPoints} value={parseHP(character, player)} growth={.5}/>
                <StatBlock stat={"ATK"} base={character.attack} value={parseATK(character, player)} growth={character.atkGrow}/>
                <StatBlock stat={"DEF"} base={character.defense} value={parseDEF(character, player)} growth={character.defGrow}/>
                <StatBlock stat={"SPD"} base={character.speed} value={parseSPD(character, player)} growth={character.spdGrow}/>
                <AbilityDescription type={"Passive"} ability={character.abilities.passive}/>
                <AbilityDescription type={"Active"} ability={character.abilities.active}/>
            </div>
        </div>
    )
}



