const persona = {
nombre : "German",
edad : 20,
altura : 1.80,
esEstudiante : true
};

console.log(persona.nombre,
    "Edad futura",persona.edad + 5,
    "Altura en cm",1.80*100 
);

if(Number(persona.edad)>=18){
console.log("es mayor de edad")
};