let camp = 0
let operation_a_process = 0

/*Erro ao somar dois elementos o segundo elemento com mais de um algarismo está somanda primeiro o primero algarismo e juntando o segundo Ex.: 15 + 18 gera 168 -> 1_(5 + 1)_8*/

/*posivel solução calcular tudo no result, usando o camp como uma fila ou plha*/

function number(number){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
        document.getElementById('text').innerHTML = ''
    }

    document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + number
}

function sum(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '+'
    }
}

function subtraction(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '-'
    }
}
/*(3+3)-2*/
function result(){
    let campText = document.getElementById('text').innerHTML
    let i = 0
    let elemento1 = 0
    let size = campText.length

    for(i = 0; i < size; i++){
        elemento1 = campText.substring(0,1)
        campText = campText.substring(1,campText.length)

        console.log(elemento1)
        console.log(campText)
        console.log(camp)

        if (elemento1 === '+'){
            operation_a_process = 1
        }else if (elemento1 === '-') {
            operation_a_process = 2
        }else{
            if (operation_a_process == 0){
                if (camp == 0){
                    camp = parseInt(elemento1)
                }else{
                    camp = camp * 10
                    camp = camp + pa
                }
            }else if (operation_a_process == 1){
                camp = camp + parseInt(elemento1)
            }else{
                camp = camp - parseInt(elemento1)
            }
        }
    }
    document.getElementById('text').innerHTML = String(camp)
}