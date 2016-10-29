var saveButton = document.getElementById('save')

saveButton.addEventListener('click', saveImage)

function saveImage() {
    var data = canvas.toDataURL()

    var request = new XMLHttpRequest()
    request.onreadystatechange = function(){
        //readyState == 4 means completed (the last state)
        //status == http code - 200 OK
        if( request.readyState == 4 && request.status == 200) {
            var response = request.responseText
            
            // window.open works for iPhone
            //window.open('download.php?file='+response, '_blank', 'location=0, menubar=0' )
            document.getElementById('downloadframe').src = 'download.php?file='+response;
        }
    }

    // POST because a lot of data, send to save.php, true (synchronous - wait for response)
    request.open('POST', 'save.php', true)
    request.setRequestHeader('Content-type', 'application/x-www.form-urlencoded')
    request.send('img='+data)

    // window.open(url, name, options)
    // location=0 - no address bar
    // menubar=0 - no menubar
}