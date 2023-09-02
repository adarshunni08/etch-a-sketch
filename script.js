const body = document.querySelector('body');

const contents = document.createElement('div');
contents.classList.add('contents')
body.appendChild(contents)

const contentOne = document.createElement('div');
contentOne.classList.add('contentOne');
contentOne.textContent = "Etch-a-Sketch";
contents.appendChild(contentOne)

const contentTwo = document.createElement('div');
contentTwo.classList.add('contentTwo');
contents.appendChild(contentTwo);


const contentTwoDotOne = document.createElement('div');
contentTwoDotOne.classList.add('contentTwoDotOne');
contentTwo.appendChild(contentTwoDotOne);

const contentTWODotTwo = document.createElement('div');
contentTWODotTwo.classList.add('contentTwoDotTwo');
contentTwo.appendChild(contentTWODotTwo);

const buttonOne = document.createElement('button');
buttonOne.classList.add('color');
buttonOne.textContent = "color";
contentTwoDotOne.appendChild(buttonOne);

const buttonTwo = document.createElement('button');
buttonTwo.classList.add('colormode');
buttonTwo.textContent = "Color Mode"
contentTwoDotOne.appendChild(buttonTwo);

const buttonThree = document.createElement('button');
buttonThree.classList.add('eraser');
buttonThree.textContent = "Eraser";
contentTwoDotOne.appendChild(buttonThree);

const buttonFour = document.createElement('button');
buttonFour.classList.add('clear');
buttonFour.textContent = "Clear";
contentTwoDotOne.appendChild(buttonFour);

const buttonFive = document.createElement('button');
buttonFive.classList.add('selectSize');
buttonFive.textContent = "Select Size";
contentTwoDotOne.appendChild(buttonFive);

let size = 16;
buttonFive.addEventListener('click', () => {
    size = prompt("Enter the Size")
});

let square;
function createGrid(size){
    for (let i=0; i<size; i++){
        let row = document.createElement('div');
        row.classList.add('row');
        contentTWODotTwo.appendChild(row);
        for (let j=0; j<size;  j++){
            square = document.createElement('div');
            square.classList.add('square');
            square.textContent = "hey"
            row.appendChild(square)
        }
    }
}

createGrid(size);

buttonFour.addEventListener('click', () => {
    console.log("hello")
})