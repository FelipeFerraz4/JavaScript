let text = 0
let camp1 = 0
let camp2 = 0
let operation_a_process = 0


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

function result(){

}