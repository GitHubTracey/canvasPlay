<?php
// $_POST is an array of all items sent to the page 
//  looking for the image
$data = $_POST['img'];

// replace the beginning of the string passed in with '' (get rid of it).
// pass the remaining base 64 stuff into data
$data = str_replace('data:image/png;base64,', '', $data);

// base64 interprets '+' as a ' ', but we want the '+', so put them back
$data = str_replace(' ', '+', $data);

$img = base64_decode($data);

// created folder images for files to be saved, 
// with a unique id for each image (type = .png)
$path = 'images/' . uniqid() . '.png';
if(file_put_contents($path, $img)) {
    print $path;
}else{
    header("HTTP/1.1 500 Internal Server Error");
}

?>