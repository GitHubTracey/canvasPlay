var canvas  = document.getElementById('canvas')
var context = canvas.getContext('2d');

var radius = 10
var dragging = false    //whether the user is currently holding down the mouse 
canvas.width  = window.innerWidth
canvas.height = window.innerHeight

context.lineWidth = radius*2    //radius is half the width of circle

//draw a point
//    context.arc(x, y, radius, startAngle, endAngle, [antiClockwise - default is clockwise])
// firefox does not support offsetX and offsetY, so we use clientX and clientY instead
var putCirclePoint = (e) => {
    if( dragging) {
        context.lineTo(e.clientX, e.clientY)
        context.stroke()
        context.beginPath()
        context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2)
        context.fill()
        context.beginPath()
        context.moveTo(e.clientX, e.clientY)
    }
}

var engage = (e) => {
    dragging = true
    // if user only clicks once, then draw a dot
    putCirclePoint(e)
}

var disengage = () => {
    dragging = false
    // prevent lines being drawn between dots when just adding dots
    // line / path should only be drawn during click and hold. not click to click 
    context.beginPath()
}

// draw a circle wherever the user clicks and holds down the mouse
canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mouseup', disengage)
canvas.addEventListener('mousemove', putCirclePoint)



/*

var putHalfCirclePoint = (e) => {
    context.beginPath()
    context.arc(e.clientX, e.clientY, radius, 0, Math.PI)
}
var putHalfCircleRotate45Point = (e) => {
    context.beginPath()
    context.arc(e.clientX, e.clientY, radius, 45, Math.PI)
    context.fill()
}

*/