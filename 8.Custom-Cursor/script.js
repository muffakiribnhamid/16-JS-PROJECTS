const cursorDot = document.querySelector(".cursor-dot")
const cursorOutline = document.querySelector(".cursor-outline")

window.addEventListener('mousemove' ,function(e) {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = posX + "px"
    cursorDot.style.top = posY + "px"

    // cursorOutline.style.left = 
    // cursorOutline.style.

    cursorOutline.animate( {
        left : posX + "px",
        top : posY + "px"
    }, {duration : 500, fill : "forwards"});

    })