(() => {
    abstract class Mutante {
        constructor(
          public name:string,
          public realName:string,
        ) {}
    }

    class Xmen extends Mutante {
        salvarMundo(){
            return "Mundo a salvo";
        }
    }

    class Villian extends Mutante {
        conquistarMundo(){
            return "Mundo conquistado";
        }
    }



    const cyclope = new Xmen('Cyclope', 'Scott Summers');
    // console.log(cyclope);
    // console.log(cyclope.salvarMundo());
    const magneto = new Villian('Magento', 'Erik Lensherr');
    // console.log(magneto);
    // console.log(magneto.conquistarMundo());

    const printName = (caracter:Mutante) => {
        console.log(caracter.realName);
    }

    // printName(cyclope);

    //Para qué sirven las clases abstractas
    //Son clases que no se pueden instanciar
    //Son clases que sirven como plantilla para otras clases
    //Son clases que sirven para definir metodos que deben ser implementados en las clases hijas

})();
