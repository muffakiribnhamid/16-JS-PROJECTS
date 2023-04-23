const nextEl = document.querySelector('.next')
const prevEl = document.querySelector('.prev')
const imagesEl = document.querySelector('img')

const imageContEl = document.querySelector('.image-container')

let currentImg = 1;

let timeOut;


nextEl.addEventListener('click',()=> {
    currentImg++
    clearTimeout(timeOut)
    updateImg()
    console.log(currentImg)


})

prevEl.addEventListener('click',()=> {
    currentImg--
    clearTimeout(timeOut)
    updateImg()
})

updateImg()

function updateImg() {
    const imagesEl = document.querySelectorAll('.image-container img')

    if(currentImg > imagesEl.length) {
        currentImg = 1;
    }
    else if(currentImg < 1) {
        currentImg = imagesEl.length
    }
   
    imageContEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`

    timeOut = setTimeout(() => {
        currentImg++
        updateImg()
    }, 3000);
    
    
}