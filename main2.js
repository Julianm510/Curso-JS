
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
            nombre.classList.add("nombre")


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




function agregarAlumno() {

    const form = document.createElement("form")
    form.innerHTML = `
    <label for="nombre-input">Nombre:</label>
    <input id= "nombre-input" type="text" step="0.01" required>
    
    <label for="apellido-input">Apellido:</label>
    <input id= "apellido-input" type="text" step="0.01" required>

    <label for="nota-input">Nota:</label>
    <input id= "nota-input" type="number" step="0.01" required>

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombreInput = document.getElementById("nombre-input").value.trim()
        const apellidoInput = document.getElementById("apellido-input").value.trim()
        const notaInput = parseInt(document.getElementById("nota-input").value)

        if (isNaN(notaInput) || nombreInput === "" || apellidoInput === "") {
            alert("por favor ingresa valores validos.")
            return
        }

        const alumno = new Alumno(nombreInput, apellidoInput, notaInput)

        if (lista.some((elemento) => elemento.nombre === alumno.nombre && elemento.apellido === alumno.apellido )) {
            alert("el alumno ya existe")
            return
        }

        lista.push(alumno)

        localStorage.setItem("alumnos", JSON.stringify(lista))
        alert("se agrego el alumno " + alumno.nombre + " " + alumno.apellido + " a la lista")



        const container = document.createElement("div")

        lista.forEach((alumno) => {
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

        const body = document.querySelector("body")
        body.appendChild(container)

        form.reset()

    })

    const body = document.querySelector("body")
    body.appendChild(form)

}



const filtrarBtn = document.getElementById("filtrar")
filtrarBtn.classList.add("button")
filtrarBtn.addEventListener("click", filtrarAlumnos)


const agregarAlumnoBtn = document.getElementById("agregarAlumno")
agregarAlumnoBtn.classList.add("button")
agregarAlumnoBtn.addEventListener("click", agregarAlumno)

