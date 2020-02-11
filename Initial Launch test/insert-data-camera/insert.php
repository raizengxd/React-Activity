<?php
    include('condb.php');
    $event_id =$_POST['post_Content'];
    
    
    $sql = "INSERT INTO tbl_login VALUES ('$event_id', '123')";

    if (mysqli_query($conn, $sql)) {
        
        
        echo "New record created successfully";
        
        
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);

?>