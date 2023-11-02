const lastBook = document.querySelector(".last-book")
const getLastItem = () => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../fetchData/fetch-book.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            lastBook.textContent = database[database.length - 1].tytul
    }}
}