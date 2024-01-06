
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

    if (resultado.length > 0 ) {

        const container = document.createElement("div")
        container.classList.add("contenedor")

        resultado.forEach((alumno) => {
            const card = document.createElement("h2")

            const nombre = document.createElement("p")
            nombre.textContent = `Nombre:  ${alumno.nombre}`
            card.appendChild(nombre)
            nombre.classList.add("nombre")


            const apellido = document.createElement("p")
            apellido.textContent = `Apellido:  ${alumno.apellido}`
            card.appendChild(apellido)

            const nota = document.createElement("p")
            nota.textContent = `Nota:  ${alumno.nota}`
            card.appendChild(nota)

            container.appendChild(card)
        })
        body.appendChild(container)
    } else {
        Swal.fire({
            title: "Error",
            text: "No se encontro al Alumno",
            icon: "error"
          });
    }
}




function agregarAlumno() {

    const form = document.createElement("form")
    form.classList.add("formulario")
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

        if (nombreInput == null || nombreInput === "" || apellidoInput == null || apellidoInput === "" ||isNaN(notaInput)  ) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ingresa valores validos",
              footer: ''
            });
            return
        }

        const alumno = new Alumno(nombreInput, apellidoInput, notaInput)

        if (lista.some((elemento) => elemento.nombre === alumno.nombre && elemento.apellido === alumno.apellido )) {
            Swal.fire("El Alumno ya existe");
            return
        }

        lista.push(alumno)

        localStorage.setItem("alumnos", JSON.stringify(lista))
        Swal.fire({
            title: "Alumno Agregado",
            text:("se agrego el alumno " + alumno.nombre + " " + alumno.apellido + " a la lista")
            ,
            icon: "success"
          });
       


        const container = document.createElement("p")
        container.classList.add("container")

        lista.forEach((alumno) => {
            const card = document.createElement("p")

            const nombre = document.createElement("h1")
            nombre.textContent = `Nombre: ${alumno.nombre}`
            card.appendChild(nombre)

            const apellido = document.createElement("h1")
            apellido.textContent = `Apellido: ${alumno.apellido}`
            card.appendChild(apellido)

            const nota = document.createElement("h1")
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

