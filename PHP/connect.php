<?php

    include 'config.php';


	$username = mysqli_real_escape_string($con, $_POST['username']);
	$password = mysqli_real_escape_string($con, $_POST['password']);
	$phone_no = mysqli_real_escape_string($con, $_POST['phone_no']);
	$email = mysqli_real_escape_string($con, $_POST['email']);
    $address = mysqli_real_escape_string($con, $_POST['address']);
    
    $pass = password_hash($password, PASSWORD_BCRYPT);

    $emailquery = " select * from users where email='$email' ";
    $query = mysqli_query($con, $emailquery);

    $emailcount = mysqli_num_rows($query);

    if($emailcount>0)
    {
        echo"email already exists";
    }
    else
    {
        $insertquery = "insert into users (username, password , phone_no, email, address) values('$username','$pass','$phone_no','$email','$address')";

        $iquery = mysqli_query($con, $insertquery);
    }

?>