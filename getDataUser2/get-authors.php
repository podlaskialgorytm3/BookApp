<?php

require_once '../config_user2.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT * FROM ksiazki');
$names = [];
$surnames = [];
$html = '';
foreach ($stmt as $row){
    if(!(in_array($row["nazwiskoautora"],$surnames) && in_array($row["imieautora"],$names))){
        $html .=  '<option data-surname='.$row["nazwiskoautora"].' data-name='.$row["imieautora"].'>'.$row["imieautora"]." ".$row["nazwiskoautora"].'</option>';
    }
    $names[] = $row["imieautora"];
    $surnames[] = $row["nazwiskoautora"];
}

sleep(1);

echo $html;
?>