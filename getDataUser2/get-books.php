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

$html = '';
foreach ($stmt as $row){
    $html .=  '<tr>';
    $html .=  '<td>' . $row['tytul'] . '</td>';
    $html .=  '<td>' . $row['cena'] . ' zł</td>';
    $html .=  '</tr>';
}

sleep(1);

echo $html;
?>