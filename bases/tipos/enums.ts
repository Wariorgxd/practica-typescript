(() => {
    //El objetivo de los enums es crear
    // un tipo de dato que nos permita definir un conjunto de constantes con nombre
    //Ayuda a trabajar

    enum AudioLevel {
        min = 1,
        medium,
        max = 10
    }

    const currentAudio = AudioLevel.medium

    console.log(currentAudio);
    console.log(AudioLevel);
})();
