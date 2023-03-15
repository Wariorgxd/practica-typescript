// Crear interfaces
interface Auto {
  encender:boolean;
  velocidadMaxima: number;
  acelear():void;
}
// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil:Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villano {
  reir?:boolean;
  comer?:boolean;
  llorar?:boolean;
}

const guason:Villano = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villano ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion
interface Ciudadano {
    ( ciudadanos:string[] ):number;
}

const ciudadGotica:Ciudadano = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface Persona {
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:string;
  imprimirBio():void;
}

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements Persona {
  public edad: number;
  public estadoCivil: string;
  public nombre: string;
  public sexo: string;

  constructor(edad:number ,estadoCivil:string, nombre:string, sexo:string){
    this.edad = edad;
    this.estadoCivil = estadoCivil;
    this.nombre = nombre;
    this.sexo = sexo;
  }

  imprimirBio(): void {
    return console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}, Sexo: ${this.sexo}, Estado Civil: ${this.estadoCivil}`);
  }
}
