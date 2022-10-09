const initialState = "splash"

export default function sceneReducer(state = initialState, action) {
    if (action.type === "scene") {
        return action.payload
    } else {return state}
}