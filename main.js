
// calcular nota final de alumnos ingresados



// function ingresar(){
//     let identificar = true 
//     let intentos = 1
    
   
//     do{
//         let alumno =prompt("ingresa tu nombre")
//         if(alumno === null){
//             break
//         }
    
//         if(alumno== "juan" && intentos <=3){
//             alert("bienvenido "+ alumno
//             +" ingrese su nota del primer parcial")
//             identificar = false
//         }else{
//             alert("el alumno " + alumno +" no esta inscripto")
//             intentos++
//             if(intentos >3){
//                alert("vuelve a ingresar el nombre correctamente")
//                console.error("alumno no registrado")
//                break
//             }
//         }
    
    
    
//     }while(
//         identificar

//     )
    
// }

// ingresar()



// function promedio(parcial,final){
//    parcial =parseInt( prompt("ingrese nota primer parcial"))  
//    final = parseInt( prompt("ingrese nota segundo parcial"))  

//    let resultado = (parcial+final)/2
//    alert ("tu promedio es "+resultado)
// }
// promedio()


// parcial = parseInt(prompt(parcial));
// final = parseInt(prompt(final));
// promedio = (parcial+final)/2;

// if(promedio >= 6){
//     document.write("el promedio es " + promedio+ " APROBADO");
// }else{
//     document.write("el promedio es " + promedio+ " DESAPROBADO");
// }

const Alumno = function(nombre,apellido,nota){       
    this.nombre = nombre
    this.apellido = apellido
    this.nota = nota
}

let alumno1 = new Alumno("Juan", "lopez", 8)
let alumno2= new Alumno("Jose", "Gomez", 7)
let alumno3 = new Alumno("Adrian","Gimenes", 5)
let alumno4= new Alumno("Luis", "Suar",6)
let alumno5 = new Alumno("Pedro","Domingues", 4)
let alumno6 = new Alumno("Roman","Cardozo",9)
let alumno7 = new Alumno("Martin","Herrera",10)
let alumno8 = new Alumno("Lucas","Martinez",7)



let lista = [alumno1,alumno2,alumno3,alumno4,alumno5,alumno6,alumno7,alumno8]


function filtrarProductos(){
let palabraClave = prompt("ingresa el nombre del alumno").toUpperCase().trim()
let resultado = lista.filter((x)=>x.nombre.toUpperCase().includes(palabraClave))


if(resultado.length >0){
    console.table(resultado)
}else{
    alert("no se encontro el producto " + palabraClave)
    let respuesta= confirm("lo queres agregar?")

    if(respuesta == true ){
        agregarAlumno()
    }
}
}




function agregarProducto(){

let nombre = prompt("ingresa el nombre del Alumno")
let apellido = parseFloat(prompt("ingresa el apellido del alumno")) 
let nota = parseInt(prompt("ingresa la nota del alumno"))


if(isNaN(precio) || isNaN(stock) || nombre===""){
    alert("por favor ingresa valores validos")
    return
}

let producto = new Producto(nombre,apellido,nota)

lista.push(producto)
console.table(lista)


}



