<?php
require_once '../config_user2.php';

$id = $_POST['id'];


$sql = "DELETE FROM ksiazki WHERE idksiazki = '".$id."'"; 

echo $sql;

$conn->query($sql);

$conn->close();
