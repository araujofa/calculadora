function insert(num){
    var numero = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = numero + num;
}

function clean(){
    document.getElementById('result').innerHTML = '';
}

function backspace(){
    var back = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = back.substring(0, back.length -1);
}

function calcular() {
    var numero = document.getElementById('result').innerHTML;

    if(numero){
        document.getElementById('result').innerHTML = eval(numero);
    } else {
        alert('Você precisa inserir um numero para continuar...');
    }
}