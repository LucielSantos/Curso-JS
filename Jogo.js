primeiroJogo = {
    nome: "Davil my Cry",
    valor: 50
}
segundoJogo = {
    nome: "Battelefield",
    valor: 100
}

listaJogos = [primeiroJogo, segundoJogo]
let soma = 0
// inicio ; a condição; incremento
for (let indice = 0; indice < listaJogos.length; indice++) {
    soma =  somaDoisValores(soma,listaJogos[indice].valor)  
}
function somaDoisValores(primeiroNumero, segundoNumero){
    return primeiroNumero + segundoNumero
}
console.log(soma)
// console.log(listaJogos)