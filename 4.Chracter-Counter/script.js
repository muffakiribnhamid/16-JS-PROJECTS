const textAreaEl = document.querySelector('.textarea');
const totalCounterEl = document.querySelector('.total-counter');
const remainingCounterEl = document.querySelector('.remaining-counter');

textAreaEl.addEventListener('keyup', ()=> {
    console.log('Changed')
    updateCounter()
})

function updateCounter() {
    let totalChracters = textAreaEl.value.length;

    totalCounterEl.textContent = totalChracters

    let remainingChracters = textAreaEl.getAttribute('maxLength') - totalChracters;

    remainingCounterEl.textContent = remainingChracters;




}