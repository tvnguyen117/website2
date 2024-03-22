rulesBtn = document.getElementById('rules-btn')
rules = document.getElementById('rules')
closeBtn = document.getElementById('close-btn')
canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')

// Create ball properties
ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    size: 10,
    speed: 4,
    dx: 4;
    dy; -4,
}

// Draw balls on canvas
function drawBall() {
    ctx.beginPath()
    ctx.arc(75, 75, 50, 0, MathPI * 2, true)
    ctx.stroke()
}

drawBall()




// Rules open and close event handlers
rulesBtn.addEventListener('click', () => {
    rules.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    rules.classList.remove('show')
})