<?php

require_once '../config_user1.php';
try {
    $pdo = new PDO('mysql:host='.$hostname.';dbname='.$database, $login, $password);
    $pdo->query('SET NAMES utf8');
} catch (PDOException $e) {
    echo 'Połączenie nie mogło zostać utworzone: ' . $e->getMessage();
    exit();
}

$stmt = $pdo->query('SELECT COUNT(*) as ilosc FROM ksiazki');

$html = '';
foreach ($stmt as $row){
    $html .=  '<p>'.$row["ilosc"].' książek</p>';
}
sleep(1);

echo $html;
?>