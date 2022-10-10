import retrieveCharacter from "../../../data/charactersJson";
import "../../../styles/CharacterScene.css"
import {useDispatch, useSelector} from "react-redux";
import PixelButton from "../../common/PixelButton";
import {parseATK, parseDEF, parseGrowth, parseHP, parseSPD} from "../../../utils/maths";

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
            </div>
        </div>
    )
}

export const StatBlock = ({stat, base, value, growth}) => {
    const wrapperClasses = [
        "stat-block",
        "flex",
        "flex-col",
        "w-[90px]",
        "m-2",
        "p-1",
    ].join(" ")

    const bigClasses = [
        "flex",
        "flex-row",
        "w-[100%]",
        "justify-between",
        "items-center",
        "font-extrabold",
        "text-lg",
        "font-title",
        "text-bright"
    ].join(" ")

    const smallClasses = [
        "flex",
        "items-center",
        "justify-center",
        "font-black",
        "text-offset-mid",
        "font-title",
        "text-md",
        "uppercase",
        "bg-bright"
    ].join(" ")

    const starClasses = [
        "flex",
        "items-center",
        "justify-start",
        "font-black",
        "text-bright",
        "text-sm",
        "tracking-tight"
    ].join(" ")

    return (
        <div className={wrapperClasses}>
            <div className={bigClasses}>
                <b>{stat}</b>
                <span>{value}</span>
            </div>
            <div className={smallClasses}>
                <span>base {base}</span>
            </div>
            <div className={starClasses}>
                <span>{parseGrowth(growth)}</span>
            </div>
        </div>
    )
}