<?php

$host = 'localhost';
$user = 'root';
$pass = 'Mindvan@2802';
$db   = 'countries';
$conn = mysqli_connect($host, $user, $pass, $db);

$result = mysqli_query($conn, "SELECT * FROM country");

$data = array();
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}