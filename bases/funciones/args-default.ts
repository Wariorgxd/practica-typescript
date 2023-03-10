(() => {
    const fullName = (firstName: string, lastName?: string, upper:boolean = false):string => {
        if (upper) {
            return `${firstName}  ${lastName}`.toUpperCase();
        } else {
            return `${firstName}  ${lastName}`;
        }
    }

        //esto es un error porque noName no es un string
        let noName:any;

        const name = fullName('Tony', 'Stark', true);
        console.log(name);
})();
