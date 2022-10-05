
// pegando informaçoes 
let li = document.getElementsByTagName('li')
let btnOk = document.querySelectorAll('btnOk > img')
let nome = document.getElementById('name')
let data = document.getElementById('data')
let preco = document.getElementById('price')
let enviar = document.getElementById('submit')
let select = document.getElementById('filtrosBoletosStatus')
//lista
let list = document.getElementById('ul-lista')

function pegarData() {
    const date = new Date()
    const dia = String(date.getDate()).padStart(2, '0')
    const mes = String(date.getMonth() + 1).padStart(2, '0')
    const ano = date.getFullYear()
    const Hoje = `${ano}-${mes}-${dia}`
    let dataatual = document.getElementById('dataAtual')
    console.log(dataatual.innerText = `${Hoje}`)

} pegarData()

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
    if (list.childElementCount <= 0) { }
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
            item.innerHTML = `<button id="btnOk"><ion-icon name="time"></ion-icon></button><p>${i.nome}</p><p>${i.data}</p><p id="valor"><b>R$</b>${i.preco}</p><img src="/more.png" alt="">`
            list.appendChild(item)
        }
    }))
}

function somarBoletos() {
    let total = document.getElementById('total')
    let soma = 0
    for (var i = 0; i < arraydedados.length; i++) {
        let atual = parseFloat(arraydedados[i].preco)
        let depois = 0
        total.innerText = ` ${(soma += (atual + depois)).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
    }
}


// evento de clique no botao de adicionar        
enviar.addEventListener('click', (e) => {
    e.preventDefault()
    Valores()
    criarElement()
    somarBoletos()
    let ulList = document.querySelectorAll('li')

    for (let i = 0; i < ulList.length; i++) {
        ulList[i].querySelector('button').onclick = (() => {
            console.log('aqui', ulList[i])
            ulList[i].classList.toggle("pago")
            ulList[i].firstChild.classList.toggle("iconPago")
        })
    }
})

// o elemento é criado por padrao na forma em que é adicionado
// é chamado diretamente dentro do criar elemento
// criar uma funcao para ordenar o array e renderizar a lista

// function ordenarArray() {
//     if (select.value === 'data') {
//         console.log('igual a data')
//         console.log(arraydedados[0].data)
//         alert(`pegadinha do malandro yeye ${data.value}`)

//     } else {
//         console.log('diferente da data')
//     }
// }




