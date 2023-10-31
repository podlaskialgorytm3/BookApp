<?php

require_once '../config_user1.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM ksiazki');

$html = '';
foreach ($stmt as $row){
    $html .=  '<option data-surname='.$row["nazwiskoautora"].' data-name='.$row["nazwiskoautora"].'>'.$row["imieautora"]." ".$row["nazwiskoautora"].'</option>';
}

sleep(1);

echo $html;
?>