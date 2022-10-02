import TextEntry from "../common/TextEntry";
import "../../styles/LoginScene.css"
import logo from "../../images/built-logo.png"

export default function LoginScene() {
    const classes = [
        "login-scene",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        // "justify-content-start"
    ].join(" ")
    return (
        <div className={classes}>
            <img src={logo} className={"w-[280px]"}/>
            <TextEntry type={"text"} name={"Username"}/>
            <TextEntry type={"password"} name={"Password"}/>
        </div>
    )
}