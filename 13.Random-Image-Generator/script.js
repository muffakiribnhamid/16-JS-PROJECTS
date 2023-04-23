const imageCont = document.querySelector('.image-container')
const btnEl = document.querySelector('.btn')

btnEl.addEventListener('click',()=> {
    
    addNewImages()
})

function addNewImages() {
    let number = 10
    for (let index = 0; index < number; index++) {
        const newImgEl = document.createElement('img')
        const randomNum = Math.floor(Math.random() * 2000)
        newImgEl.src = `https://picsum.photos/300?random=${randomNum}`
        newImgEl.classList.add = 'img'
        imageCont.appendChild(newImgEl)
        
    }

    
}