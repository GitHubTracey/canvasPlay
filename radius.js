var setRadius = (newRadius) => {
    if(newRadius < minRad)
        newRadius = minRad
    else if(newRadius > maxRad)
        newRadius = maxRad
    
    radius = newRadius
    context.lineWidth = radius*2

    //innerHTML = manipulate what is between the two tags
    radSpan.innerHTML = radius
}


var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    interval = 5,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad')


decRad.addEventListener('click', () => {
    setRadius(radius-interval)
})

incRad.addEventListener('click', () => {
    setRadius(radius+interval)
})

setRadius(defaultRad)