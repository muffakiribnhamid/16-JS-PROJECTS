const num1 = Math.ceil(Math.random() * 10)
const num2 = Math.ceil(Math.random() * 10)




// get Elements
const question = document.getElementById('question')
const formEl = document.getElementById('form')
const inputEl = document.getElementById('input')
const scoreEl = document.getElementById('score')

//Get Score

let score = localStorage.getItem('score');
if(!score) {
}
scoreEl.innerText = `score ${score}`

question.innerText = `What is ${num1} multiply by ${num2}?`


const correctAnswer = num1 * num2


// Add event listner to form
formEl.addEventListener('submit',(event) => {
    const userAnswer = +inputEl.value;
    if(userAnswer === correctAnswer) {
        score++;
        updateLocalStorage()
        console.log(score)
        
    }
    else {
        score--
        updateLocalStorage()
        console.log(score)
    }

})


// Save Score to Local Storage
function updateLocalStorage() {
    localStorage.setItem('score',JSON.stringify(score))
}