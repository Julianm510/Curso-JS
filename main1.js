


// PRIMER ENTREGA

// function promedio(parcial,final){

//     let alumno =prompt("ingresa tu nombre")
//     if(alumno=alumno){
//         alert("bienvenido "+ alumno
//        )


//     parcial =parseInt( prompt("ingresa nota parcial"))
//     final =parseInt( prompt("ingresa nota final"))

//     let resultado = ((parcial+final)/2)
//     alert("tu promedio es "+resultado)


//     if(resultado >= 6){
//         alert("Estas aprobado")


//     }else{
//         alert("estas desaprobado")
//     }



//     }


// }
//     promedio()


// const inicio = new Date()

// for (let i = 0; i < 1000; i++) {
//     console.log("haciendo tiempo")
// }

// const final = new Date()

// console.log("El proceso tardó: " + (final - inicio) + " milisegundos")

// SEGUNDA ENTREGA


const Alumno = function (nombre,apellido,nota) {
    this.nombre = nombre
    this.apellido = apellido
    this.nota = nota
}

let alumno1 = new Alumno("Juan", "lopez", 8)
let alumno2 = new Alumno("Jose", "Gomez", 7)
let alumno3 = new Alumno("Adrian", "Gimenes", 5)
let alumno4 = new Alumno("Luis", "Suar", 6)
let alumno5 = new Alumno("Pedro", "Domingues", 4)
let alumno6 = new Alumno("Roman", "Cardozo", 9)
let alumno7 = new Alumno("Martin", "Herrera", 10)
let alumno8 = new Alumno("Lucas", "Martinez", 7)



let lista = [alumno1, alumno2, alumno3, alumno4, alumno5, alumno6, alumno7, alumno8]


function filtrarAlumnos() {
    let palabraClave = (prompt("ingresa el nombre del alumno").toUpperCase()).trim()
    let resultado = lista.filter((x) => x.nombre.toUpperCase().includes(palabraClave))

    if (palabraClave === null || palabraClave == ""){
        alert("Ingresa un valor correcto")

    } else if(resultado.length > 0) {
        console.table(resultado)
    } else {
        alert("no se encontro el Alumno " + palabraClave)
        let respuesta = confirm("lo queres agregar?")

        if (respuesta == true) {
            agregarAlumno()
            
        }
        
    }

   
}

filtrarAlumnos()




function agregarAlumno() {

    let nombre = prompt("ingresa el nombre del Alumno")
    let apellido = prompt("ingresa el apellido del alumno")
    let nota = parseInt(prompt("ingresa la nota del alumno"))


    if (isNaN(nota) || nombre === "" || nombre == null || apellido === "") {
        alert("por favor ingresa valores validos")
        return
    } else {
        alert("Alumno agregado")
        

    }

    let alumno = new Alumno(nombre, apellido, nota)

    lista.push(alumno)
    console.table(lista)


}






const container = document.createElement("div")
container.classList.add("listado")

lista.forEach((alumno) => {
    const card = document.createElement("li")

    const nombre = document.createElement("h2")
    nombre.textContent = `Nombre: ${alumno.nombre}`
    card.appendChild(nombre)

    const apellido = document.createElement("h2")
    apellido.textContent = `Apellido: ${alumno.apellido}`
    card.appendChild(apellido)

    const nota = document.createElement("h2")
    nota.textContent = `Nota: ${alumno.nota}`
    card.appendChild(nota)
    container.appendChild(card)
})

const body = document.querySelector("body")
body.appendChild(container)

form.reset()

})

const body = document.querySelector("body")
body.appendChild(form)

}





let crearTabla = function(listado){
    let stringtabla = "<tr></tr><th>Nombre</th><td>apellido</td><td>Nota</td></tr>";

    for(let alumno of listado){
        let fila = "<tr> <td>"
        fila += alumno.nombre;
        fila += "</td>"

        fila += "<td>"
        fila += alumno.apellido;
        fila += "</td>"

        fila += "<td>"
        fila += alumno.nota;
        fila += "</td>"

        fila += "</tr>"
        stringtabla += fila;
    } 
    return stringtabla;
}
    crearTabla(lista)

    document.getElementById("tablaAlumnos").innerHTML =  crearTabla(lista);
