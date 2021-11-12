<?php

require 'connection.php';

$full_name= $_POST['full_name'];
$email=$_POST['email'];
$contact_number=$_POST['contact_number'];
$password=$_POST['password'];
$repeat_password=$_POST['repeat_password'];




$sql = "INSERT INTO registration (full_name,email,contact_number,password,repeat_password)
         VALUES ('$full_name','$email','$contact_number','$password','$repeat_password')";

if (mysqli_query($conn, $sql)) {
  function_alert();
  echo file_get_contents('login.html');
  
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

function function_alert(){
    echo "<script>alert('Registered successfully.')</script>";
}


?>