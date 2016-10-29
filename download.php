<?php
// get file
$file = $_GET['file'];
// tell php it's a png
header('Content-type: image/png');
// tell php it's an attachment
header('Content-disposition: attachment; filename=canvasoutput.png');
// spit out file
readfile($file)

?>