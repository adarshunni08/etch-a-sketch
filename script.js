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

const footer = document.createElement('div');
footer.classList.add('footer');
footer.textContent = "Copyright © Adarsh Unni"
contents.appendChild(footer)

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

