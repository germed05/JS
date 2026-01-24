const alumno={
    nombre : "German",
    semestre : 6,
    calificacion1 : 100,
    calificacion2 : 95,
    calificacion3 : 70
}
const promedio = (alumno.calificacion1+alumno.calificacion2+alumno.calificacion3)/3


const aprobado = promedio>=60
console.log("Promedio: ", promedio)

console.log("Aprobo: ", promedio>=60)

//if(Number(promedio)>=60){
//console.log("aprobado")
//};