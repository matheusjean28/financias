
// pegando informaçoes 
let nome = document.getElementById('name')
let data = document.getElementById('data')
let preco = document.getElementById('price')
let enviar = document.getElementById('submit')
//lista
let list = document.getElementById('ul-lista')

//funcoes uteis 
function limparInputs() {
    nome.value = ''
    data.value = ''
    price.value = ''
}
let arraydedados = []

//pegar os valores do input e valida cada um deles
function Valores() {
    let values = {
        nome: document.getElementById('name'),
        data: document.getElementById('data'),
        preco: document.getElementById('price'),
    }
    //tratamento do preco para string vazia
    if (values.preco.value.trim() === '') {
        console.log("Insira o valor do Boleto")
        preco.classList.add('invalid')
        alert('insira o valor do boleto')
        return
    }
    if (!isNaN(values.preco.value) === false) {
        console.log("O valor do boleto so pode conter numeros ")
        preco.classList.add('invalid')
        alert('O valor do boleto não pode estar vazio')
        return
    }
    //tratamento da data
    if (values.data.value === '' || values.data.value === NaN) {
        data.classList.add('invalid')
        alert('Insira a data do boleto')
        console.log("Insira a data do Boleto")
        return
    }
    //tratamento do nome 
    if (values.nome.value.trim() === '') {
        console.log('O nome nao pode estar vazio ')
        nome.classList.add('invalid')
        alert('O nome do boleto nao pode estar vazio')
    }
    else {
        nome.classList.remove('invalid')
        data.classList.remove('invalid')
        preco.classList.remove('invalid')
        let dadosData = {
            nome: nome.value, data: data.value, preco: preco.value,
        }
        arraydedados.push(dadosData)
        limparInputs()
        return arraydedados
    }
}

//criar elemento 
function criarElement() {
    // verificar se existem filhos na ul 
    if (list.childElementCount <= 0) {
    }
    else {
        // remover e fazer um novo map retornando a lista atualizada
        // se existir 
        console.log('maior que zero')
        list.innerHTML = ''
        console.log('removendo elementos filhos')
    }
    Array.from(arraydedados.map((i, e, d) => {
        let item = document.createElement('li')
        if (item.innerHTML === i.nome) {
            console.log("este nome ja esta sendo usado")
            return
        }
        if (item.innerHTML === i.data) {
            return
        }
        if (item.innerHTML === i.preco) {
            return
        }
        else {

            list.appendChild(item)
            item.innerHTML = `<button id="btnOk"><img src="/evento.png" alt=""></button><p>${i.nome}</p><p>${i.data}</p><p id="valor"><b>R$</b>${i.preco}</p><img src="/more.png" alt="">`
            list.appendChild(item)
        }
    }
    ))
}


//monitora botoes da ul
function imgClick() {
    if (list.childElementCount <= 0) {
    } 
    {
        let getlista = document.getElementById('ul-lista')
        for( let li in getlista){
            


        }
        
    }
}

enviar.addEventListener('click', (e) => {
    e.preventDefault()
    Valores()
    criarElement()
    imgClick()
})








// if (document.readyState === "loading") {  // Ainda carregando
//     document.addEventListener("DOMContentLoaded", console.log('o site ainda esta carregando'));
// }
// else {  // `DOMContentLoaded` foi disparado
//     imgClick();
// }