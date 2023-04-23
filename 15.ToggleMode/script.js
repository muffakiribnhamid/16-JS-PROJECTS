const inputEl = document.querySelector('.input')
const bodyEl = document.querySelector('body')

inputEl.addEventListener('input', ()=> {
    updateBody()
    savetoLocalStorage()
})

inputEl.checked = JSON.parse(localStorage.getItem('mode'))

updateBody()
function updateBody() {
    if(inputEl.checked) {
        bodyEl.style.background = 'black'

    }
    else {
        bodyEl.style.background = 'white'
    }
}

function savetoLocalStorage() {
    localStorage.setItem('mode',JSON.stringify(inputEl.checked))
}