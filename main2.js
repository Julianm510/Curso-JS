
const Alumno = function (nombre, apellido, nota) {
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


if (localStorage.getItem("alumnos")) {
    lista = JSON.parse(localStorage.getItem("alumnos"))
} else {
    lista = lista

}

function filtrarAlumnos() {
    const body = document.querySelector("body")
    const input = document.getElementById("filtrarA").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((alumno) => alumno.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0) {

        const container = document.createElement("div")
        container.classList.add("container")

        resultado.forEach((alumno) => {
            const card = document.createElement("div")

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
        body.appendChild(container)
    } else {
        alert("no se encontro alumno")
    }
}






const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button")
filtrarBtn.addEventListener("click", filtrarAlumnos)


const agregarBtn = document.getElementById("agregarAlumno")
agregarAlumnoBtn.classList.add("botonera")
agregarBtn.addEventListener("click", filtrarAlumnos)

