<?php
    include('condb.php');
    $event_name =$_POST['event_name'];
    $location = $_POST['location'];
    $description= $_POST['$description'];
    $date= $_POST['date'];
    $session=$_POST['session'];
    
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