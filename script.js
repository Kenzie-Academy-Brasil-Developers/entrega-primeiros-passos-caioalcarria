

let precoDoRefrigerante = parseFloat(prompt('Qual o preço do refrigerante?'))
let quantidadeDeRefrigerante = parseFloat(prompt('Qual a quantidade de refrigerante?'))


let precoDoMacarrao = parseFloat(prompt('Qual o preço do macarrão?'))
let quantidadeDeMacarrao = parseFloat(prompt('Qual a quantidade de macarrão?'))

let precoDoErvilha = parseFloat(prompt('Qual o preço do ervilha?'))
let quantidadeDeErvilha = parseFloat(prompt('Qual a quantidade de ervilha?'))

let precoDoArroz = parseFloat(prompt('Qual o preço do arroz?'))
let quantidadeDeArroz = parseFloat(prompt('Qual a quantidade de arroz?'))

let precoDoFeijao = parseFloat(prompt('Qual o preço do feijão?'))
let quantidadeDeFeijao = parseFloat(prompt('Qual a quantidade de feijão?'))

let precoDoVinho = parseFloat(prompt('Qual o preço do vinho?'))
let quantidadeDeVinho = parseFloat(prompt('Qual a quantidade de vinho?'))

let a = precoDoRefrigerante*quantidadeDeRefrigerante

let b = precoDoMacarrao*quantidadeDeMacarrao

let c = precoDoErvilha * quantidadeDeErvilha

let d = precoDoArroz*quantidadeDeArroz

let e = precoDoFeijao*quantidadeDeFeijao

let f = precoDoVinho*quantidadeDeVinho

let total = (a+b+c+d+e+f)


if (total%2 ==0){
    let seuAmigo = ((total-f)/2)+f
    let voce = (total-f)/2

}else{
    let voce = parseInt(total/2) 
    let seuAmigo = parseInt(total/2)
    
}
let voce = 
console.log(total)
console.log(`Você deverá pagar ${voce} e seu amigo ${seuAmigo}`)

alert(`Você deverá pagar ${voce} e seu amigo ${seuAmigo}`)

