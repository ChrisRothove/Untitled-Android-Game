import retrieveCharacter from "../../../data/charactersJson";
import "../../../styles/CharacterScene.css"
import {useDispatch, useSelector} from "react-redux";
import PixelButton from "../../common/PixelButton";
import {parseATK, parseDEF, parseHP, parseSPD} from "../../../utils/maths";

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
                <PixelButton text={"Back"} type={"button"} callback={goBack}/>
                <StatBlock stat={"HP"} base={character.hitPoints} value={parseHP(character, player)}/>
                <StatBlock stat={"ATK"} base={character.attack} value={parseATK(character, player)}/>
                <StatBlock stat={"DEF"} base={character.defense} value={parseDEF(character, player)}/>
                <StatBlock stat={"SPD"} base={character.speed} value={parseSPD(character, player)}/>
            </div>
        </div>
    )
}

export const StatBlock = ({stat, base, value}) => {
    const wrapperClasses = [
        "flex",
        "flex-col",
        "w-[100px]",
    ].join(" ")

    const bigClasses = [
        "flex",
        "flex-row",
        "w-[100px]",
        "justify-between",
        "items-center",
        "text-3xl",
        "font-title"
    ].join(" ")

    const smallClasses = [
        "flex",
        "items-center",
        "justify-center"
    ]

    return (
        <div className={wrapperClasses}>
            <div className={bigClasses}>
                <span>{stat}</span>
                <span>{value}</span>
            </div>
            <div className={smallClasses}>
                <span>base {base}</span>
            </div>
        </div>
    )
}