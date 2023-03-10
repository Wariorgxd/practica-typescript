(() => {
    const fullName = (firstName: string, lastName: string):string => {
        return `${firstName}  ${lastName}`;
    }

    //esto es un error porque noName no es un string
    let noName:any;

    const name = fullName(noName, 'Stark');
    console.log(name);
})();
