const INPUT = document.getElementById('input')
const BUTON = document.getElementById('buton')
const CONT = document.getElementById('contenedor')
const H2 = document.getElementById('h2')
const H3 = document.getElementById('h3')
const BODY = document.body

class Pizza{
    constructor(id,nombre,ingredientes,precio){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio; 
    }
};

const pizza1 = new Pizza(1,'muzza',['queso','oregano','salsa'],1200); 
const pizza2 = new Pizza(2,'anana',['anana','queso','oregano'],1250); 
const pizza3 = new Pizza(3,'salame',['salame','queso','salsa'],1300); 
const pizza4 = new Pizza(4,'cebolla',['cebolla','queso','salsa'],1350); 
const pizza5 = new Pizza(5,'champis',['champis','salsa','queso'],1400); 
const pizza6 = new Pizza(6,'criolla',['pimiento','queso','salsini'],1450);

const pizzas = [pizza1,pizza2,pizza3,pizza4,pizza5,pizza6] 

// Este bloque crea un array con todos los id existentes del array de objetos pizza
// y luego pregunta si ese array contiene un valor igual al que es ingresado por input
// que llega como parametro, en caso que devuelva true el metodo invoca addEl()

const valid =(num)=>{
    array = []
    pizzas.forEach((el)=>array.push(el.id))
    array.includes(parseInt(num))==true?addEl(num):addError()
};

// En caso que sea true se busca entre el array de objetos un objeto con el atributo
// id igual al numero que entra por parametro,que coincide con el input ingresado
// y muestra en h2 y h3 el value de nombre y precio respectivamente del objeto que encontro
// coincidencia. Se muestra por consola el valor retornado de la variable pizza

const addEl =(num)=>{
    let pizza = pizzas.find((el)=>el.id==num);
    H2.innerHTML=`La pizza que coincide es: ${pizza.nombre}`  
    H3.innerHTML=`Cuesta: $ ${pizza.precio}` 
    console.log(pizza);
    return pizza
};

// En caso de que el valor ingresado por input almacenado en la variable id no coincida
// con ningun valor en el array de id, se muestra en h2 y h3 los valores correspondientes
// al resultado de las busqueda

const addError =()=>{
    let id = document.getElementById('input').value
    if(id==''){
        H2.innerHTML='Por favor ingrese un numero',
        H3.innerHTML=`pruebe con alguno de los siguientes N°: ${array.join('-')}`}
    else{
        H2.innerHTML='No se encontro ninguna pizza con el id indicado'
        H3.innerHTML=`pruebe con alguno de los siguientes N°: ${array.join('-')}`}
};

const emptyField = ()=>{
    H2.innerHTML='Ingrese un numero por favor'
}

BUTON.addEventListener('click',()=>{
    let id = document.getElementById('input').value
    valid(id)
    messi(10)
});

// en caso de que el valor ingresado sea igual al prametro recibido por messi 
// se ejecuta la funcion para invocar al 10
function messi(m) {
    if(document.getElementById('input').value==m)
    BODY.style.backgroundImage='url(https://th.bing.com/th/id/R.788d5b4d1d78a039ad0686911bdf9580?rik=1trGvAP9KKdCUQ&pid=ImgRaw&r=0)'
    BODY.style.backgroundPosition='cover' 
}