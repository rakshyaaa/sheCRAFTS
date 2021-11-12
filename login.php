
<?php

require 'connection.php';

$email =$_POST['email'];
$password =$_POST['password'];

$email = stripcslashes($email);  
$password = stripcslashes($password); 

$sql = "select * from registration where email = '$email' and password = '$password'";  
$result = mysqli_query($conn, $sql);  
$row = mysqli_fetch_array($result);  
$count = mysqli_num_rows($result);  

echo $count;

if($count == 1){ 
    header("Location: dashboard.html");
    exit;
}  
        
else{         
  function_alert();
  echo file_get_contents('login.html');  
}     

function function_alert(){
    echo "<script>alert('Login failed. Enter your authentic credentials.')</script>";
}

?>

