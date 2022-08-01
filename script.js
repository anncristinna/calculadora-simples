function somar(){
    var res = window.document.getElementById('res')
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    if (num1.value == 0 || num2.value == 0){
        window.alert('Preencha os campos!')
    } else {
        let soma = Number(num1.value) + Number(num2.value)
        res.innerHTML = `${soma}`
    }
}

function subtrair(){
    var res = window.document.getElementById('res')
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    if (num1.value == 0 || num2.value == 0){
        window.alert('Preencha os campos!')
    } else {
        let subtracao = Number(num1.value) - Number(num2.value)
        res.innerHTML = `${subtracao}`
    }
}

function multiplicar() {
    var res = window.document.getElementById('res')
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    if (num1.value == 0 || num2.value == 0){
        window.alert('Tudo ok!')
    } else {
        let produto = Number(num1.value) * Number(num2.value)
        res.innerHTML = `${produto}`
    }
}

function dividir(){
    var res = window.document.getElementById('res')
    var num1 = window.document.getElementById('num1')
    var num2 = window.document.getElementById('num2')
    if (num1.value == 0 || num2.value == 0){
        window.alert('Preencha os campos!')
    } else {
        let divisao = Number(num1.value) / Number(num2.value)
        res.innerHTML = `${divisao}`
    }
}