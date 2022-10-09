export const parseATK = (character, player) => {
    const {attack, atkGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(attack + (level * atkGrow))
}

export const parseDEF = (character, player) => {
    const {attack, defGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(attack + (level * defGrow))
}

export const parseSPD = (character, player) => {
    const {attack, spdGrow, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(attack + (level * spdGrow))
}

export const parseHP = (character, player) => {
    const {attack, id} = character
    const {level} = player?.characters[id] || 1
    return Math.floor(attack + (level * .5))
}