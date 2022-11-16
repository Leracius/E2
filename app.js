const INPUT = document.getElementById('input')
const BUTON = document.getElementById('buton')
const CONT = document.getElementById('contenedor')
const H2 = document.getElementById('h2')
const H3 = document.getElementById('h3')
const H4 = document.getElementById('h4')
const BODY = document.body

const CONTIMG = document.getElementById('img-container')
CONTIMG.style.width="250px"
CONTIMG.style.height="250px"

class Pizza{
    constructor(id,nombre,ingredientes,precio,img){
        this.id = id;
        this.nombre = nombre;
        this.ingredientes = ingredientes;
        this.precio = precio; 
        this.img = img
    }
};

const pizza1 = new Pizza(1,'muzza',['queso','oregano','salsa'],1200, "muzza.jpg"); 
const pizza2 = new Pizza(2,'anana',['anana','queso','oregano'],1250, "anana.jpg"); 
const pizza3 = new Pizza(3,'salame',['salame','queso','salsa'],1300, "salame.jpg"); 
const pizza4 = new Pizza(4,'cebolla',['cebolla','queso','salsa'],1350, "cebolla.jpg"); 
const pizza5 = new Pizza(5,'champis',['champis','salsa','queso'],1400, "champis.jpg"); 
const pizza6 = new Pizza(6,'criolla',['pimiento','queso','salsini'],1450, "criolla.jpg");

const pizzas = [pizza1,pizza2,pizza3,pizza4,pizza5,pizza6] 

const setLast = ()=>addEl(parseInt(localStorage.getItem("pizzaPos")))

const setLocalPosition = (num)=>{
    let key = "pizzaPos"
    localStorage.setItem(key,num)
}

const valid =(num)=>{
    array = []
    pizzas.forEach((el)=>array.push(el.id))
    array.includes(parseInt(num))==true?addEl(num):addError()
};

const addEl =(num)=>{
    let pizza = pizzas.find((el)=>el.id==num);
    H2.innerHTML=`Nombre: ${pizza.nombre}`  
    H3.innerHTML=`PRECIO: $ ${pizza.precio}`
    H4.innerHTML=`Ingredientes: ${pizza.ingredientes}`
    CONTIMG.style.backgroundImage=`url(./assets/${pizza.img})`
    CONTIMG.style.backgroundRepeat="no-repeat"
    return pizza
};

const addError =()=>{
    let id = document.getElementById('input').value
    CONTIMG.style.backgroundImage="none"
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
    setLocalPosition(id)
    valid(id)
});

setLast()
