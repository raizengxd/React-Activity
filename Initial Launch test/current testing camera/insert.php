<?php
    include('condb.php');
    $name =$_POST['username'];
    $password = $_POST['password'];
    $sql = "INSERT INTO tbl_login VALUES ('$name', '$password')";

    if (mysqli_query($conn, $sql)) {
        
        echo '<script> alert("New Record") </script>';
        echo "New record created successfully";
        header('Location: index.php');
        
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

?>