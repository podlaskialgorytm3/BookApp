<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Książki</title>
    <link rel="shortcut icon" href="img/icon.png" type="image/x-icon">
    <link rel="stylesheet" href="/style/main.css">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap" rel="stylesheet">
</head>
<body>
    <div class="left-side">
        <button class="connect top-button"><a href="index.php">Rozłącz</a></button>
        <div class="select-main">
            <h2>Wybierz autora</h2>
            <div class="select-container">
                <select id="find-writer">
                </select>
            </div>
            <button class="find-author">Szukaj</button>
        </div>
    </div>
    <div class="right-side">
        <div class="current-time">

        </div>
        <table id="book-table">
            <thead>
                <th>Tytuł książki</th>
                <th>Cena</th>
                <th>Edytuj</th>
                <th>Usuń</th>
            </thead>
            <tbody id="books">
            </tbody>
        </table>
        <div class="books-count">
            
        </div>
        <div class="last-book">
            
        </div>
        <div class="add-book">
            +
        </div>
    </div>
    <div class="add-panel panel">
            <img src="/img/close.png" alt="" class="close-btn close-add">
            <h2>Dodaj ksiązkę</h2>
            <input type="text" class="name" placeholder="Wpisz imię autora!">
            <input type="text" class="surname" placeholder="Wpisz nazwisko autora!">
            <input type="text" class="title" placeholder="Wpisz nazwę ksiązki!">
            <input type="number" class="price" placeholder="Wpisz cenę książki!">
            <button class="submit-add">Dodaj książkę</button>
    </div>
    <div class="edit-panel panel">
            <img src="/img/close.png" alt="" class="close-btn close-edit">
            <h2>Edytuj ksiązkę</h2>
            <input type="text" class="name-edit" placeholder="Wpisz imię autora!">
            <input type="text" class="surname-edit" placeholder="Wpisz nazwisko autora!">
            <input type="text" class="title-edit" placeholder="Wpisz nazwę ksiązki!">
            <input type="number" class="price-edit" placeholder="Wpisz cenę książki!">
            <button class="submit-edit">Edytuj książkę</button>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/jsUser2/GetBooks.js"></script>
    <script src="/jsUser2/getAuthors.js"></script>
    <script src="/jsUser2/getCountBooks.js"></script>
    <script src="/jsUser2/getTime.js"></script>
    <script src="/jsUser2/addBook.js"></script>
    <script src="/jsUser2/getLastItem.js"></script>
</body>
</html>