<?php
require_once '/config_user2.php';

$result = mysqli_query($conn, "SELECT * FROM ksiazki");

$data = array();
while ($row = mysqli_fetch_object($result))
{
    array_push($data, $row);
}

echo json_encode($data);
exit();