import {combineReducers} from "redux";

import sceneReducer from "./sceneReducer";
import characterReducer from "./characterReducer";
import playerReducer from "./playerReducer";

const rootReducer = combineReducers({
    scene: sceneReducer,
    character: characterReducer,
    player: playerReducer
})

export default rootReducer