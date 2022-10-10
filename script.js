
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

//funcoes uteis 
function pegarData() {
    const date = new Date()
    const dia = String(date.getDate()).padStart(2, '0')
    const mes = String(date.getMonth() + 1).padStart(2, '0')
    const ano = date.getFullYear()
    const Hoje = `${ano}-${mes}-${dia}`
    let dataatual = document.getElementById('dataAtual')
    dataatual.innerText = `${Hoje}`

} pegarData()

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
        id: 0,
        status: 'aguardando'
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

    // na hora de criar o Elementento 
    // verificar se existe a propriedade id 
    // se o id existir 
    // verificar o valor 
    // se o valor ja existir, encrementar mais um 
    else {
        nome.classList.remove('invalid')
        data.classList.remove('invalid')
        preco.classList.remove('invalid')

        const geraId = (() => {
            return Math.floor(Math.random() * values.preco.value);
        })
        let valorId = geraId();

        let dadosData = {
            nome: nome.value, data: data.value, preco: preco.value, id: valorId, status: "aguardando"
        }
        arraydedados.push(dadosData)
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
        list.innerHTML = ''
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
            item.innerHTML = `<button id="btnOk"><p style="display:none ;">${i.id}</p><ion-icon name="time"></ion-icon></button><p>${i.nome}</p><p>${i.data}</p><p id="valor"><b>R$</b>${i.preco}</p><img src="/more.png" alt="">`
            list.appendChild(item)
            // limparInputs()
        }
    }))
}

function verificarstatus() {
    let aVencer = Array.from(arraydedados).map((i) => {
        if (i.status === 'aguardando') {
            return i.preco
        }
        else {
            return 0
        }
    })
    return aVencer
}



function somarBoletos() {
    let total = document.getElementById('total')
    let aVencer = verificarstatus()

    if (aVencer.length <= 0) {
        total.innerText = `R$ 0`
        return console.log('array vazio')
    }

    else {
        let atual = 0
        let old = 0
        for (var i = 0; i < aVencer.length; i++) {

            if (aVencer.length <= 0) {
                return 0
            }
            else {
                let current = parseInt(aVencer[i])
                atual += old + current
                total.innerText = ` ${(atual).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`
            }
        }
    }
}

// funcao para deletar o elemento do array 
// function removerElemento(indice) {
//     Array.from(arraydedados).filter((i) => {
//         if (i.id === indice) {
//             let id = i
//             let indexDoIndice = arraydedados.indexOf(id, 0)
//             // arraydedados.splice(indexDoIndice, 1)
//             console.log(arraydedados)
//             somarBoletos()
//             return indexDoIndice
//         }
//     })

// }


function pagoOunao(indice) {
    Array.from(arraydedados).filter((i) => {
        if (i.id === indice) {
            let id = i
            let indexDoIndice = arraydedados.indexOf(id, 0)
            if (i.status === "aguardando") {
                arraydedados[indexDoIndice].status = "pago"

                return arraydedados
            }
            else {
                arraydedados[indexDoIndice].status = "aguardando"

                return arraydedados
            }
        }
    })
    somarBoletos()
}


// evento de clique no botao de adicionar        
enviar.addEventListener('click', (e) => {
    e.preventDefault()
    Valores()
    criarElement()
    somarBoletos()
    verificarstatus()

    let ulList = document.querySelectorAll('li')

    for (let i = 0; i < ulList.length; i++) {
        ulList[i].querySelector('button').onclick = (() => {
            let indice = parseInt(ulList[i].firstChild.firstChild.innerText)
            pagoOunao(indice)
            ulList[i].classList.toggle("pago")
            ulList[i].firstChild.classList.toggle("iconPago")


        })
    }
})
