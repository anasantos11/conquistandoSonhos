function isNullOrEmpty(campo) {
    if (campo == undefined || campo == "")
        return true;
}

function validarValor(valor) {
    if (isNullOrEmpty(valor)) {
        return 0;
    } else {
        return valor;
    }

}