const initialState = 28

export default function characterReducer(state = initialState, action) {
    if (action.type === "select/character") {
        return action.payload
    } else {return state}
}