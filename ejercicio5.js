let saldo = 1000;
function cajero(opcion,monto) {
    switch (opcion) {
        case "consultar":
            console.log("saldo: ",saldo);
            break;
    
        case "depositar":
            saldo+=monto;
            console.log("Deposito exitoso nuevo saldo: ",saldo);
            break;

        case "retirar":
            if (monto<saldo) {
                saldo-=monto;
                console.log("saldo: ",saldo);
            }else{
                console.log("Monto no valido, saldo insuficiente");              
            }
            break;
        default:
            console.log("Que wey estas esa opcion no existe");
            break;
    }
}


cajero("consultar")
cajero("depositar",10)
cajero("retirar",20)
cajero(saldo)