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
        <button class="connect top-button"><a href="index2.php">Połącz</a></button>
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
        <table id="book-table">
            <thead>
                <th>Tytuł książki</th>
            </thead>
            <tbody id="books">
            </tbody>
        </table>
        <div class="books-count">
            
        </div>
    </div>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="/js/GetBooks.js"></script>
    <script src="/js/getAuthors.js"></script>
    <script src="/js/getCountBooks.js"></script>
</body>
</html>