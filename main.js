var canvas  = document.getElementById('canvas')
var context = canvas.getContext('2d');

var radius = 10
var dragging = false    //whether the user is currently holding down the mouse 

canvas.width  = window.innerWidth
canvas.height = window.innerHeight

// resizing the window automatically clears the canvas (by design)
// so we can do the following to save and then reset the width and height 
// as to what the user can manipulate.
window.onresize = () => {
    var image = context.getImageData(0,0, canvas.width, canvas.height)
    canvas.width  = window.innerWidth
    canvas.height = window.innerHeight
    context.putImageData(image, 0,0)
canvas.addEventListener('mousedown', engage)
canvas.addEventListener('mouseup', disengage)
canvas.addEventListener('mousemove', putCirclePoint)
}

// utilizes the design that resizing clears the view
//clearRect(0, 0, canvas.width, canvas.height) could also work, but extremely slow.
function clearCanvas(canvas) {
    canvas.width = canvas.width;
}
// could also implement a "virtual" canvas (one that is never presented to the dom 
// to maintain the state without interrupting the flow 
// var virtualCanvas = document.createElement('canvas')
// var virtualContext = virtual....

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