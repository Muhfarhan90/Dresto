<?php
    $conn = mysqli_connect("localhost","root","","db_dresto");
    
    if (!$conn) {
        die(" database error ". mysqli_connect_error());
    } 

