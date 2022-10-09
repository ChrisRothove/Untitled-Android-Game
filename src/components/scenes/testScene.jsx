import {useSelector} from "react-redux";

export default function TestScene() {
    const scene = useSelector(state => state.scene)

    const classes = [
        "login-scene",
        "flex",
        "flex-col",
        "items-center",
        "justify-center",
        // "justify-content-start"
    ].join(" ")
    return <div className={classes}>
        <div>{scene}</div>
    </div>
}