
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


function Valores() {

    let values = {
        nome: document.getElementById('name'),
        data: document.getElementById('data'),
        preco: document.getElementById('price'),
    }
    //tratamento do preco para string vazia
    if (values.preco.value.trim() === '') {
        console.log("Insira o valor do Boleto")
        return
    }
    if (!isNaN(values.preco.value) === false) {
        console.log("O valor do boleto so pode conter numeros ")
        return
    }

    //tratamento da data
    if (values.data.value === '' || values.data.value === NaN) {
        console.log("Insira a data do Boleto")
        return
    }

    //tratamento do nome 
    if (values.nome.value.trim() === '') {
        console.log('O nome nao pode estar vazio ')
        nome.classList.add('invalid')
    }
    else {
        nome.classList.remove('invalid')
        let dadosData = { nome: nome.value, data: data.value, preco: preco.value, 
            }
        arraydedados.push(dadosData)
        return arraydedados
    }
}


// antes de criar o elemento


//criar elemento 
function criarElement() {
    // verificar se existem filhos na ul 
    if(list.childElementCount <= 0){
        
    }
    else {
        // remover e fazer um novo map retornando a lista atualizada
        // se existir 
        console.log('maior que zero')
        list.innerHTML = ''
        console.log('removendo elementos filhos')
    }
    
    Array.from(arraydedados.map((i,e,d) => {
        
        let item = document.createElement('li')
        if(item.innerHTML === i.nome)
        {
            console.log("este nome ja esta sendo usado")
            return 
        }
        if(item.innerHTML === i.data){
            return 
    }
    if(item.innerHTML === i.preco){
        return 
    }
    else{
        
        list.appendChild(item)
        item.innerHTML = `<button id="btnOk"><img src="/evento.png" alt=""></button><p>${i.nome}</p><p>${i.data}</p><p id="valor"><b></b>${i.preco}</p><img src="/more.png" alt="">`
        list.appendChild(item)
    } 
}
)

)
}




//eventos

enviar.addEventListener('click', (e) => {
    e.preventDefault()
    Valores()
    console.log(arraydedados.length)
    // limparInputs()
    criarElement()

    
    
})

