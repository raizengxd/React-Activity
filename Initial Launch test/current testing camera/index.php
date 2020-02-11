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

    


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">


</head>
<style>
nav {
    background-color:#4c46c2;
}
body{
   
}
.brand-logo{
    font-weight: bold;
}
/* label color */

/* label focus color */
  /* label color */
  .input-field label {
     color: #000;
   }
   /* label focus color */
   .input-field input:focus + label {
     color: #ff80ab !important;
   }
   /* label underline focus color */
   .row .input-field input[type=text]:focus {
     border-bottom: 1px solid #ff80ab;
     box-shadow: 0 1px 0 0 #ff80ab;
   }

   
   /* valid color */
   .input-field input[type=text].valid {
     border-bottom: 1px solid #9e9e9e;
     box-shadow: 0 1px 0 0 #9e9e9e;
     
   }
   /* invalid color */
   .input-field input[type=text].invalid {
     border-bottom: 1px solid red;
     box-shadow: 0 1px 0 0 red;
   }
   /* icon prefix focus color */
   .input-field .prefix.active {
     color: #000;
   }
   .fontx{
    font-weight: bold;
    font-size:50pt;
   }





</style>
<body>
    
    <nav class="nav-wrapper">        
        <div class="container">
            <a href="#" class="brand-logo">Event</a>
            <a href="#" class="sidenav-trigger" data-target="mobile-links">
                <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Register</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>

    </nav>
    <ul class="sidenav" id="mobile-links">
        <li style="background-color:rgb(74, 119, 179); padding-top: 20%;"><a href="#">HEADER</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Register</a></li>
        <li><a href="#">Contact</a></li>
    </ul>
   
    <div class="container" style="padding-top: 4%;">
    <form method="POST" action="insert.php" >
    

   


    <div class="row">
    <div class="col s12 m12">
      <div class="card">
        <div class="card-content">
         
          <div class="row">
          <i class="medium material-icons" style="padding-right: 1%;padding-top: %;">event</i><span class="fontx"> Event </span>
          </div>
          
          

          <div class="row ">
    <div class="input-field col s6">
          <input id="last_name" type="text" class="validate" placeholder="First Name" >
          
    </div>
    
    </div>
          
        </div>
       
      </div>
    </div>
  </div>
    

    </form>
    

    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
    <script>
    $(document).ready(function(){
        $('.sidenav').sidenav();
    });
    </script>
</body>
</html>