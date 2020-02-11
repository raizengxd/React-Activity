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

$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

?>