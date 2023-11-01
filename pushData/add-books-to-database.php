<?php

@include '../config_user2.php';


$pdo = new PDO("mysql:host=$hostname;dbname=$database", $login, $password);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$name = $_POST["name"];
$surname = $_POST["surname"];
$title = $_POST["title"];
$price = $_POST["price"];

$sql = "INSERT INTO ksiazki (imieautora,nazwiskoautora,tytul,cena) 
VALUES ('$name','$surname','$title',$price)";
$conn = mysqli_connect($hostname, $login, $password,$database);

if (mysqli_query($conn, $sql)) {
 	echo json_encode(array("statusCode"=>200));
} 
else {
	echo json_encode(array("statusCode"=>201));
}
mysqli_close($conn);

?>