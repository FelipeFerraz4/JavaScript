function Swap(){

    var color = document.getElementById('text').style.color;

    if(color === 'red' || color === '#ff0000' || color === 'rgb(255, 0, 0)'){
        document.getElementById("text").style.color = '#000000'
        document.getElementById("text2").style.color = '#000000'
    } else {
        document.getElementById("text").style.color = '#FF0000'
        document.getElementById("text2").style.color = '#0000FF'
    }
}