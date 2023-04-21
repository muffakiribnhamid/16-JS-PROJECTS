const containerl = document.querySelector('.container');

for (let index = 0; index < 30; index++) {
    const colorContainer = document.createElement('div')
    colorContainer.classList.add('color-container')
    containerl.appendChild(colorContainer)
    randomColor()
    
}

const colorContainersEls = document.querySelectorAll('.color-container')
generateColors()

function generateColors() {
    colorContainersEls.forEach((colorContainersEls)=> {
        const newColorCode = randomColor()
        colorContainersEls.style.backgroundColor = `#${newColorCode}`
        colorContainersEls.textContent = `#${newColorCode}`;
        

    })
}

function randomColor() {
    const chars = "0123456789abcdef"
    const colorCodeLen = 6
    let colorCode = ""

    for (let index = 0; index < colorCodeLen; index++) {
         const randomNum = Math.floor(Math.random() * chars.length)
         colorCode += chars.substring(randomNum, randomNum + 1)
    }
    return colorCode;
}