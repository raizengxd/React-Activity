<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script type="text/javascript" src="jquery-3.4.1.min.js"></script>    
</head>
<body>
    <h1>Hi</h1>
    <input type="text" id = "name" placeholder="Enter your name">
    <input type="text" id ="age" placeholder="Enter your age">
    <input type="button" value ="Submit" onclick ="post();">
    <div id="result"></div>
    <script>
    function post(){
        var name = $('#name').val();
        var age = $('#age').val();        
        alert(age);
        $.post('validate.php',{postname:name,postage:age},
        function(data){
            $('#result').html(data);
        });
    }

    </script>
</body>
</html>