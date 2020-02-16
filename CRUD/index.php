<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    <title>Document</title>
</head>
<body>
        <form method="POST" action="insertDetails.php">
        <input type="text" placeholder="Name" name="name"><br>
        <input type ="text" placeholder="Organization " name= "organization"><br>
        <input type = "email" placeholder = "Email" name ="email"><br>
        <input type ="password" placeholder="password" name = "password"><br>
        <input type ="submit">
    </form>

    <center>
    <?php
    
    include("condb.php");
    
    
   
    $result = mysqli_query($conn,"SELECT * FROM tbl_login");
    echo "<center> CRUD </center>";
    echo "<table border='1'>
    <tr>
    <th>Username</th>
    <th>Password</th>
    </tr>";
    
    
    while($row = mysqli_fetch_array($result))
    {
    echo "<tr>";
    echo "<td>" . $row['username'] . "</td>";
    echo "<td>" . $row['password'] . "</td>";
    echo "<td><button>Edit</button></td></tr>";
    echo "<td><button>Delete</button></td></tr>";
    }
    echo "</table>";
    
    
    
    
    
    mysqli_close($conn);
    ?>

</center>
</body>
</html>