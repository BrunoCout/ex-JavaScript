function count() {
    const start = window.document.querySelector('#start')
    var ini = Number(start.value)
    const end = window.document.querySelector('#end')
    var fm = Number(end.value)
    const step = window.document.querySelector('#step')
    var ps = Number(step.value)
    const res = window.document.querySelector('#res')
    
    if (ini == 0 || fm == 0) {
        alert('Erro ao contar.')
    } else if (ps > fm || ps <= 0) {
        res.innerHTML = `Contando: <br>` 
        alert('Erro ao contar! Valor de passo redefinido para 1.')
        ps = 1
        for (var i = ini; i <= fm; i += ps) {
            res.innerHTML +=  `\u{1F449} ${i} `
        } 
    } else if (ini < fm ) {
        for (var i = ini; i <= fm; i += ps) {
            res.innerHTML +=  `\u{1F449} ${i} `
        }
    } else {
        for (var i = ini; i >= fm; i -= ps) {
            res.innerHTML += `\u{1F449} ${i} `
        }
    }
    res.innerHTML += `\u{1F3C1}`
}