




function promedio(parcial,final){

    let alumno =prompt("ingresa tu nombre")
    if(alumno=alumno){
        alert("bienvenido "+ alumno
       )
        

    parcial =parseInt( prompt("ingresa nota parcial"))
    final =parseInt( prompt("ingresa nota final"))

    let resultado = ((parcial+final)/2)
    alert("tu promedio es "+resultado)
    if(resultado >= 6){
        alert("Estas aprobado")


    }else{
        alert("estas desaprobado")
    }
    
    

    }


}
    promedio()




