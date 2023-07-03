let camp = 0
let operation_a_process = 0

/*Erro ao somar dois elementos o segundo elemento com mais de um algarismo está somanda primeiro o primero algarismo e juntando o segundo Ex.: 15 + 18 gera 168 -> 1_(5 + 1)_8*/

/*posivel solução calcular tudo no result, usando o camp como uma fila ou plha*/

function number(number){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
        document.getElementById('text').innerHTML = ''
    }

    document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + number

    if(operation_a_process == 0){
        if (camp == 0){
            camp = parseInt(number)
        }
        else{
            camp = camp * 10
            camp = camp + parseInt(number)
        }
    }
    else{
        if(operation_a_process == 1){
            camp = camp + parseInt(number)
        }
        else{
            camp = camp - parseInt(number)
        }
        operation_a_process = 0
    }
}

function sum(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '+'
    }
    operation_a_process = 1
}

function subtraction(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '-'
    }
    operation_a_process = 2
}

function result(){
    document.getElementById('text').innerHTML = String(camp)
    camp
}