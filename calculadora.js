function inserir(num){
    let valor = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = valor + num;      
}

function resetar(){
    document.getElementById('resultado').innerHTML = '';
}

function apagar(){
    let resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}

function somar(){
    let resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}


