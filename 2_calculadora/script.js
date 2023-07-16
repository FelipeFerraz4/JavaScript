let camp = 0
let camp2 = 0
let status_operation = false
let operation_a_process = ""

/*Erro ao somar dois elementos o segundo elemento com mais de um algarismo está somanda primeiro o primero algarismo e juntando o segundo Ex.: 15 + 18 gera 168 -> 1_(5 + 1)_8*/


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

function dot(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '.'
    }
}

function multiplication(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + 'x'
    }
}
function division(){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
    }
    else{
        document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + '/'
    }
}

function operation(operation){

    if(operation_a_process === "sum"){
        camp = camp + camp2
        camp2 = 0
    }else if(operation_a_process === "subtraction"){
        camp = camp - camp2
        camp2 = 0
    }else if(operation_a_process === "multiplication"){
        camp = camp * camp2
        camp2 = 0
    }else if(operation_a_process === "division"){
        camp = camp / camp2
        camp2 = 0
    }else{

    }
}

/*91-91*/
function result(){
    let campText = document.getElementById('text').innerHTML
    let i = 0
    let elemento1 = 0
    let size = campText.length
    camp = 0
    operation_a_process = ""

    console.log("novo")
    console.log(elemento1)
    console.log(campText)
    console.log(camp)
    console.log(camp2)

    for(i = 0; i < size; i++){
        elemento1 = campText.substring(0,1)
        campText = campText.substring(1,campText.length)

        //console.log("etapa")
        //console.log(elemento1)
        //console.log(campText)
        //console.log(camp)
        //console.log(camp2)
        //console.log(operation_a_process)

        if (elemento1 === '+'){
            operation(operation_a_process)
            operation_a_process = "sum"
        }else if (elemento1 === '-') {
            operation(operation_a_process)
            operation_a_process = "subtraction"   
        }else if (elemento1 === 'x') {
            operation(operation_a_process)
            operation_a_process = "multiplication"   
        }else if (elemento1 === '/') {
            operation(operation_a_process)
            operation_a_process = "division"   
        }else{
            if (operation_a_process === ""){
                if (camp == 0){
                    camp = parseFloat(elemento1)
                }else{
                    camp = camp * 10
                    camp = camp + parseFloat(elemento1)
                }
            }else{
                if (camp2 == 0){
                    camp2 = parseFloat(elemento1)
                }else{
                    camp2 = camp2 * 10
                    camp2 = camp2 + parseFloat(elemento1)
                }
            }
        }
    }
    //console.log("fim")
    //console.log(camp)
    //console.log(camp2)
    operation(operation_a_process)
    //console.log(camp)
    document.getElementById('text').innerHTML = String(camp)
}