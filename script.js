
// pegando informaçoes 
let enviar = document.getElementById('submit')
let nome = document.getElementById('name')
let data = document.getElementById('data')
let preco = document.getElementById('price')

//lista
let list = document.getElementById('ul-lista')


//funcoes uteis 
let arraydedados = []

function limparInputs() {
    nome.value = ''
    data.value = ''
    price.value = ''
}

function juntardados() {
    let name = nome.value;
    let date = data.value
    let preco = price.value
    

        dadosData = { name, date, preco }
        arraydedados.push(dadosData)

        return [arraydedados]


}
let resultadodafuncao = juntardados()
//

//criar elemento 
function criarElement() {
    let item = document.createElement('li')
    list.appendChild(item)
    item.classList.add('pago')
    item.innerHTML = `<button id="btnOk"><img src="/evento.png" alt=""></button><p>${nome.value}</p><p>${data.value}</p><p id="valor"><b></b>${price.value}</p><img src="/more.png" alt="">`
    list.appendChild(item)
    limparInputs()
}


//eventos
enviar.addEventListener('click', (e) => {
    e.preventDefault()
    juntardados()
    criarElement()
    console.log(resultadodafuncao[0])

})

