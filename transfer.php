<?php
$uname = $_POST['username'];
$password = $_POST['password'];
echo 'TEST: '.$uname;
echo 'PAS: '.$password;

function message($msg, $link){
    echo'<script> alert("Hi")</script>';
    echo "<script> document.location='open.php'</script>";
}

message("f","f");

?>