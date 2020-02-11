<?php
include("condb.php");
$name = $_POST['name'];
$organization = $_POST['organization'];
$email = $_POST['email'];
$password= $_POST['password'];

$sql = "insert into tbl_login values('$name','$password' )";
if (mysqli_query($conn, $sql)) {
        
    echo '<script> alert("New Record") </script>';
    echo "New record created successfully";
   
    
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?>