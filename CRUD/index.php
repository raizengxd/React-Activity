<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
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
    $nameee= $row['username'];
    echo "<tr>";
    echo "<td>" .$nameee  . "</td>";
    echo "<td>" . $row['password'] . "</td>";
   echo "<td><a href='update.php? id=   ".$nameee."'>Edit</a></td></tr>";
   
    }

    echo "</table>";
   
    // Aaaaaaaaaaaaaaaaaaaaaaaahj  
    
    
    
    mysqli_close($conn);
    ?>

</center>
</body>
</html>