let divMain = document.querySelector('.main');
let divSquare = document.querySelector('.quadrados');

function createSquare(){
    let quadrado = document.createElement('div');
    quadrado.style.backgroundColor = color()

    divSquare.appendChild(quadrado);
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16) ];
    }
    return color;
}


function color() {
    let newColor = getRandomColor();
    return newColor
}