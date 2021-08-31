const num = window.document.querySelector('input#txtnum')
const tab = window.document.querySelector('select#tab')
function cleani() {
    num.value = ''
    tab.innerHTML = ''
}
function tabuada() {
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var n = Number(num.value)
        for (var i = 1; i <= 10; i++) {
            var item = window.document.createElement('option')
            item.text = `${n} x ${i} = ${n * i}`
            tab.appendChild(item)
        }
    }
    

}