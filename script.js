
let nome = document.getElementById("name").value
const enviar = document.getElementById("submit")
const lista = document.getElementById("ul-lista")
const price = document.getElementById("price").value
const date = document.getElementById("data").value
// criar a li 


enviar.addEventListener("click", (e) => {
    e.preventDefault()
        const elemento = document.createElement('li')
        // adicionar o elemento html 
        elemento.innerHTML = `<div class="img-item"><img src="/src/cronometro.png" alt=""></div><div class="tag-item">${nome}</div><div class="date-item">${date}</div><div class="price-item"><b>R$_</b><P>${price}</p><div class="more-item"><img src="/more.png" alt=""></div>`
        elemento.classList.add("item-lista-boleto")
        lista.appendChild(elemento)
    // adicionar a classe do elemento
})

