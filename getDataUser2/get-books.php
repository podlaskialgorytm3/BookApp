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
    $html .=  '<td><img class="edit" src="../img/edit.png" style="width: 30px;" data-id='.$row["idksiazki"].'/></td>';
    $html .=  '<td><img class="delete" src="../img/delete.png" style="width: 30px;" data-id='.$row["idksiazki"].'/></td>';
    $html .=  '</tr>';
}

sleep(1);

echo $html;
?>
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>
    <script src="../jsUser2/deteleBook.js"></script>
    <script src="../jsUser2/editBook.js"></script>
</body>
</html>