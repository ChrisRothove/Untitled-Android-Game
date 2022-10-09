import {useSelector} from "react-redux";
import LoginScene from "./scenes/LoginScene";
import SplashScene from "./scenes/SplashScene";
import CharacterScene from "./scenes/character/CharacterScene";

export default function SceneRouter() {
    const scene = useSelector(state => state.scene)

    switch(scene) {
        case "splash": {
            return <SplashScene/>
        }
        case "root": {
            return <LoginScene/>
        }
        case "character": {
            return <CharacterScene/>
        }
    }
}