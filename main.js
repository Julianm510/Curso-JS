
// calcular nota final de alumnos ingresados




function ingresar(){
    let identificar = true 
    let intentos = 1
    
   
    do{
        let alumno =prompt("ingresa tu nombre")
        if(alumno === null){
            break
        }
    
        if(alumno== "juan" && intentos <=3){
            alert("bienvenido "+ alumno
            +" ingrese su nota del primer parcial")
            identificar = false
        }else{
            alert("el alumno " + alumno +" no esta inscripto")
            intentos++
            if(intentos >3){
               alert("vuelve a ingresar el nombre correctamente")
               console.error("alumno no registrado")
               break
            }
        }
    
    
    
    }while(
        identificar

    )
    
}

ingresar()



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



