// Elements By Id
const hour = document.getElementById('hour')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const ampm = document.getElementById('ampm')

function Updateclock() {
    let h =  new Date().getHours()
    let m =  new Date().getMinutes()
    let s =  new Date().getSeconds()
    let ampm =  'AM'
    
    // Checking if its am or pm
    if(h > 12) {
        h = h-12
        ampm = 'PM'
    }

    // Check if h is less than 10 append 0 to h

    h = h < 10 ? "0" + h :h

    
    // Setting Data
    hour.innerText = h
    minutes.innerText = m
    seconds.innerText = s

    setTimeout(() => {
        Updateclock()
        
    }, 1000);

}

Updateclock()