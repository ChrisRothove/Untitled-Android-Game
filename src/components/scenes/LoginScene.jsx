import TextEntry from "../common/TextEntry";
import "../../styles/LoginScene.css"
import logo from "../../images/After-Us.png"
import PixelButton from "../common/PixelButton";
import {useDispatch} from "react-redux";

export default function LoginScene() {
    const dispatch = useDispatch()
    const splashBack = () => dispatch({type: "scene", payload: "splash"})
    const classes = [
        "gradient-base",
        "login-scene",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        // "justify-content-start"
    ].join(" ")
    const buttonBox = [
        "flex",
        "flex-row",
        "items-center",
        "justify-between",
        "w-[200px]"
    ].join(" ")
    return (
        <div className={classes}>
            <img src={logo} className={"w-[280px]"}/>
            <TextEntry type={"text"} name={"Username"}/>
            <TextEntry type={"password"} name={"Password"}/>
            <div className={buttonBox}>
                <PixelButton text={"Login"} type={"button"} callback={splashBack} />
                <PixelButton text={"Sign Up"} type={"button"} callback={splashBack} />
            </div>
        </div>
    )
}