let text = 0

function number(number){
    if (document.getElementById('text').innerHTML === 'Calculadora'){
        document.getElementById('text').innerHTML = ''
    }

    document.getElementById('text').innerHTML = document.getElementById('text').innerHTML + number
}
