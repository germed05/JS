const ticket = {
    id: "TCK-001",
    titulo: "Error de impresora",
    estado: "Abierto",
    prioridad: "Alta",
    area: "Sistemas",
    fecha: "2024-06-15-10:30:00",
    creador:{
        nombre:"German",
        email: "german.medina9919@alumnos.udg.mx"
    },
    asignados:["Andres","Ana",],
    comentarios: [
        {usuario:"Ana",mensaje:"Revisa el equipo"},
        {usuario:"Andres",mensaje:"Falta toner"}
    ],
};

console.log("Titulo ",ticket.titulo,"\nEstado: ",ticket.estado)
console.log("---------------------------------------------")
console.log("Estado: ",ticket.estado)
if (ticket.estado=="Abierto") {
    ticket.estado="Cerrado"
}
console.log("Estado: ",ticket.estado)
console.log("---------------------------------------------")

for (let x = 0; x < ticket.comentarios.length; x++) {
    console.log(ticket.comentarios[x]) 
    
}
let nuevoMensaje= "HOLA MUNDO";
if (nuevoMensaje!==null) {
    ticket.comentarios.push({usuario: "German",mensaje:nuevoMensaje})
}

for (let x = 0; x < ticket.comentarios.length; x++) {
    console.log(ticket.comentarios[x]) 
    
}


console.log("---------------------------------------------")
if (ticket.asignados!=null) {
    for (let x = 0; x < ticket.asignados.length; x++) {
        console.log(ticket.asignados[x])
    }
    
}else{
    console.log("No hay asignados")
}
console.log("---------------------------------------------")
console.log(ticket.prioridad);

let nuevaPrioridad = "Media";
if (
    nuevaPrioridad==="Alta"||
    nuevaPrioridad==="Media"||
    nuevaPrioridad==="Baja"
) {
    ticket.prioridad=nuevaPrioridad;
}
console.log(ticket.prioridad);
console.log("---------------------------------------------")
let anaComento=false;
for (let x = 0; x < ticket.comentarios.length; x++) {
    if (ticket.comentarios[x].usuario==="Ana") {
        anaComento=true;
    }
}
if (anaComento) {
    console.log("Ana comento")
}else{
    console.log("Ana no comento")
}
console.log("---------------------------------------------")