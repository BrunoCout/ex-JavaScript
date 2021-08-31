const arr = []
let innum = window.document.querySelector('#innum')
let sel = window.document.querySelector('#sel')
let res = window.document.querySelector('#res')

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}
function isLista(n, a) {
    if (a.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
    res.innerHTML = ''
    if (isNumero(innum.value) && !isLista (innum.value, arr)) {
        let n = Number(innum.value)
        let num = window.document.createElement('option')
        num.text = `Valor ${n} adicionado`
        sel.appendChild(num)
        arr.push(n)
    } else {
        alert('Erro! Número repetido ou invalido, digite um número valido.')
    }
    innum.value = ''
    innum.focus()
}
function finalizar() {
    if (arr.length == 0) {
        alert('Adicione valores antes de finalizar.')
    } else {
        let maior = Math.max(...arr)
        let menor = Math.min(...arr)
        let soma = 0
        /* 
        let soma = arr.reduce(function(soma, i) {
            return soma + i
        })
        */
        for (let i in arr) {
            soma += arr[i]
        } 
        let media = soma / arr.length
        res.innerHTML = `<p>Ao todo, temos ${arr.length} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor número informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}