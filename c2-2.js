const plataforma = {
    nombre: "IntelFlix",
    plan:"x",
    usuario:{
        nombre:"German",
        edad:20
    },
    perfiles:[
        {
            nombre:"German Lizaola",
            favoritos:[],
            historial:[]
        },
        {
            nombre: "X",
            favoritos:["asd","asd Bad"],
            historial:["asd"]
        }
    ],
};

console.log(plataforma.usuario.nombre)
console.log("---------------------------------------------")


console.log("Plan: ",plataforma.plan)
if (plataforma.plan!="Premium") {
    plataforma.plan="Premium"
}
console.log("Plan: ",plataforma.plan)
console.log("---------------------------------------------")


let datos= Object.keys(plataforma.perfiles[0]);
for (let x = 0; x < plataforma.perfiles[0].favoritos.length; x++) {
    console.log(plataforma.perfiles[0].favoritos[x])
}
if (plataforma.perfiles[0].favoritos!=null) {
    plataforma.perfiles[0].favoritos[0]="Lucifer"
}
for (let x = 0; x < plataforma.perfiles[0].favoritos.length; x++) {
    console.log(plataforma.perfiles[0].favoritos[x])
}
console.log("---------------------------------------------")
if (plataforma.perfiles[0].historial.length>0) {
    for (let x = 0; x < plataforma.perfiles[0].historial.length; x++) {
        console.log(plataforma.perfiles[0].historial[0]);
        
    } 
}else{
    console.log("No hay historial")
}
console.log("---------------------------------------------")
if (plataforma.usuario.edad>17) {
    console.log("El usuario es mayor");
    
}else{
    console.log("El usuario es menor");
    
}