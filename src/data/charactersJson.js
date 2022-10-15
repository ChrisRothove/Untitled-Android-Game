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
                desc: "Adds 10% of 28's ATK to active character.",
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
    },
    13: {
        id: 13,
        art: "13-portrait.png",
        atkBtn: "attack-button-13.png",
        name: "Cherri",
        type: "scrolls",
        hitPoints: 16,
        attack: 9,
        defense: 10,
        speed: 15,
        atkGrow: .3,
        defGrow: .5,
        spdGrow: .7,
        abilities: {
            passive: {
                icon: "N/A",
                name: "Honey Hustle",
                desc: "Attacking character has a 10% chance to strike twice.",
                func: "honeyHustle"
            },
            active: {
                icon: "N/A",
                name: "Buzzkill",
                desc: "Deals ATK as damage, on a break the target can't use a scroll action next round.",
                func: "Buzzkill"
            }
        },
        qualities: {
            bonds: [
                {
                    name: "42",
                    desc: "Having protected her in an important moment, 13 values 42 above almost anyone else."
                },
                {
                    name: "11",
                    desc: "The other Android is a close relative in a lot of ways, and 13 feels inferior to her. During the time before humanity fell, 13's district was annexed by 11's larger district, along with many others. They were able to annex her district because she failed."
                }
            ],
            shortcomings: [
                {
                    name: "Crippling Self-doubt",
                    desc: "She doesn't feel capable of fighting or surviving, and allows herself to be cared for by 42 and 28. She always has a plan unless they have to attack. Frequently tries to explain her way out of fighting.",
                },
                {
                    name: "Cowardice",
                    desc: "She is afraid of alot of things and this makes her indecisive when there are real stakes."
                }
            ],
            likes: {
                list: ["Reading", "Classic Literature", "Random Facts", "Jam on toast"],
                callout: {
                    name: "Science and History",
                    desc: "13 has a scholars heart and loves coming up with theories about how things work. Routinely seen gesticulating about them to 42, who listens quietly. "
                }
            }
        }
    }
}

export default function retrieveCharacter(id) {
    console.log(id, characters)
    return characters[id]
}