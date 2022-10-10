import characterReducer from "../store/characterReducer";

export const parseATK = (character, player) => {
    const {attack, atkGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(attack + (level * atkGrow))
}

export const parseDEF = (character, player) => {
    const {defense, defGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(defense + (level * defGrow))
}

export const parseSPD = (character, player) => {
    const {speed, spdGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(speed + (level * spdGrow))
}

export const parseHP = (character, player) => {
    const {hitPoints, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor((hitPoints * 2) + (level * .5))
}

export const parseGrowth = (growth) => {
    switch (growth) {
        case .3: return <span>&#10022;</span>
        case .5: return <span>&#10022; &#10022; &#10022;</span>
        case .7: return <span>&#10022; &#10022; &#10022; &#10022; &#10022;</span>
    }
}