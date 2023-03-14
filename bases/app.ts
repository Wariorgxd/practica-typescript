
type Carros = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:()=>void
}
// Objetos
const batimovil:Carros = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

const bumblebee:Carros = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villanos = {
  nombre:string,
  edad:number|undefined,
  mutante:boolean
}

// Villanos debe de ser un arreglo de objetos personalizados
const villanos:Villanos[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para Charles y otro para apocalipsis

type Heroe = {
  poder:string,
  estatura:number
}

type Villano = {
  lider:boolean,
  miembros:string[]
}

const charles:Heroe = {
  poder:"psiquico",
  estatura: 1.78
};

const apocalipsis:Villano = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique:Heroe|Villano;

mystique = charles;
mystique = apocalipsis;
