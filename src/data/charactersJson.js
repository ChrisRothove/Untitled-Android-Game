const characters = {
    28: {
        id: 28,
        art: "28-portrait.png",
        atkBtn: "attack-button-28.png",
        name: "Abigail",
        type: "swords",
        hitPoints: 15,
        attack: 20,
        defense: 4,
        speed: 11,
        atkGrow: .7,
        defGrow: .3,
        spdGrow: .5,
        abilities: {
            passive: {
                icon: "N/A",
                name: "Barbwire Grit",
                desc: "Adds 10% of 28's atk to active character",
                func: "barbwireGrit"
            },
            active: {
                icon: "N/A",
                name: "Sword Barrage",
                desc: "Deals ATK as damage. 10% chance to deal an extra 50% damage.",
                func: "swordBarrage"
            }
        },
        qualities: {
            bonds: [
                {
                    name: "Humanity",
                    desc: "28 has Guilt over not being able to save humanity, being useless at the end, and misses her creator who was like a father to her. "
                },
                {
                    name: "Solitude",
                    desc: "28 likes to be alone with her own thoughts, causing her to self isolate, especially in times of turmoil"
                }
            ],
            shortcomings: [
                {
                    name: "Lashing Out",
                    desc: "28 tends to lash out at things that remind her of her own mistakes and regrets.",
                },
                {
                    name: "Unfocused",
                    desc: "28 has trouble focusing on one thing for long stints, especially boring things like reading."
                }
            ],
            likes: {
                list: ["Sappy dramas", "Balls of yarn", "Pretty dresses", "Beagles"],
                callout: {
                    name: "Human Culture",
                    desc: "28 is curious and often side-tracked by relics of human society, especially fashion and snacks."
                }
            }
        }
    }
}

export default function retrieveCharacter(id) {
    return characters[id]
}