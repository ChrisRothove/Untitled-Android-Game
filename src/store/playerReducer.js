const initialState = {
    username: "player",
    password: "password",
    inventory: [],
    characters: {
        28: {
            level: 1,
            duplicates: []
        },
        13: {
            level: 1,
            duplicates: []
        },
        42: {
            level: 1,
            duplicates: []
        }
    }
}

export default function playerReducer(state = initialState, action) {
    const {type, payload} = action
    const value = payload?.value
    if (type !== "player") return state
    // username changes
    if (type === "player/username") state.username = value
    // password changes
    if (type === "player/password") state.password = value
    // placeholder for inventory
    if (type === "player/inventory") state.inventory = value
    // // inventory additions
    // if (inventory?.add) {
    //     state.inventory = [
    //         ...state.inventory,
    //         ...inventory
    //     ]
    // }
    // // inventory reductions
    // if (inventory?.remove) {
    //     const removal = inventory.remove
    //     removal.forEach(item => {
    //         state.inventory[item.id] !== undefined ? state.inventory[item.id].count -- : null
    //     })
    // }

    if (type === "player/character/") {
        const {characters} = state
        // Adding new Character
        if(type === "player/character/new") {
            if(!characters[value]) {
                characters[value] = {
                    level: 1,
                    duplicates: [],
                }
            } else if (characters[value].duplicates.length >= 8) {
                characters[value].duplicates.push("Unused")
            } else {
                // TODO: handle extra dupes
            }
        }
        // Increase level
        if(type === "player/character/level-up") {
            if(characters[value]) {
                characters[value].level ++
            }
        }
    }

    //return adjusted state
    return state
}