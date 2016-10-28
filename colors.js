//color array
var colors = ['black', 'grey', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

// array of swatch elements (list of colors)
var swatches = document.getElementsByClassName('swatch')

// create each of the swatch elements based on the list of colors
for(var i=0, n=colors.length; i<n; i++) {
    var swatch = document.createElement('div')
    swatch.className = 'swatch'
    swatch.style.backgroundColor = colors[i]
    swatch.addEventListener('click', setSwatch)
    document.getElementById('colors').appendChild(swatch)
}

function setColor(color) {
    context.fillStyle = color
    context.strokeStyle = color
    var active = document.getElementsByClassName('active')[0]
    if(active) {
        active.className = 'swatch'
    }
}

function setSwatch(e) {
     //identify swatch
     var swatch = e.target
     //get colors
     setColor(swatch.style.backgroundColor)
     //give active class
     swatch.className += ' active'
 }
//default to RED when we start the app
 setSwatch({target: document.getElementsByClassName('swatch')[3]})