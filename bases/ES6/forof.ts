(()=>{
    type Avenger = {
        name: string,
        weapon:string
    }

    const ironman: Avenger = {
        name: 'Tony Stark',
        weapon: 'Armorsuit'
    }

    const captainAmerica: Avenger = {
        name: 'Capitan América',
        weapon: 'Shield'
    }

    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ironman, captainAmerica, thor];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
    }
})();
