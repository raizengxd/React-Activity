<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
</head>
<body>

<!-- 
ID
title 
name
gender
contact number
organization 
email
event 


-->
    <form method="POST" action="insert.php" >
    <input type="text" name="event_name" placeholder="Event Name"><br>
    <input type="text" name="location" placeholder="Location"><br>
    <input type="textarea" name ="description" placeholder="Description"><br>
    
    

    <input type="date" name = "password" placeholder="datepicker">

    <input type="submit">
    </form>
</body>
</html>