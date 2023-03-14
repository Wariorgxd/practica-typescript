(() => {
    type Heroes = {
        nick:string,
        ironman:string,
        vision:string,
        activo:boolean,
        poder:number,
    }
    const avengers:Heroes = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder:1500,
    }

    // const {nick, poder, vision} = avengers;
    //
    // console.log(nick.toUpperCase());

    const print = (avengers:Heroes):void => {
        console.log(avengers.vision)
    }

    const hello = ({nick, ironman, ...resto}:Heroes):void => {
        console.log(nick, resto.activo);
    }
    // print(avengers);

    // hello(avengers);

    const avengerArr:string[] = ['Capitan America', 'Ironman', 'Hulk'];

    const ironman:string = avengerArr[1];
    const [capitan, ...resto] = avengerArr;
    // console.log({capitan, resto});



})();
