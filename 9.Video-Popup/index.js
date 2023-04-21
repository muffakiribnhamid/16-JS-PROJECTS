let btnEl = document.querySelector('.btn')
let btnClose = document.querySelector('.close-icon')
let videoEl = document.querySelector('video')
let trailerEl = document.querySelector('.trailer-container')

btnEl.addEventListener('click',()=> {
    trailerEl.classList.remove('active')

})

btnClose.addEventListener('click',()=> {
    trailerEl.classList.add('active')
    videoEl.pause()
    videoEl.currentTime =0;
})