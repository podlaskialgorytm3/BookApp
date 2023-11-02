function getBooks(){
    $.ajax({
        url: "../getDataUser2/get-books.php",
        method: 'POST'
    }).done(function( data ) {
        $('#books').html(data);
    })
}
$(document).ready(function(){
    getBooks();
    getLastItem()
});

const select = document.querySelector("#find-writer")
const search = document.querySelector(".find-author")

search.addEventListener("click",() => {
    const selectedOption = select.options[select.selectedIndex];
    const dataName = selectedOption.getAttribute('data-name');
    const dataSurname = selectedOption.getAttribute('data-surname');
    getBooksFilter(dataName,dataSurname)
})
function getBooksFilter(dataName,dataSurname){
    $.ajax({
        url: "../getDataUser2/get-books-filter.php",
        method: 'POST',
        data: {
            name: dataName,
            surname: dataSurname	
        }
    }).done(function( data ) {
        $('#books').html(data);
    });
    $.ajax({
        url: "../getDataUser2/get-count-filter.php",
        method: 'POST',
        data: {
            name: dataName,
            surname: dataSurname	
        }
    }).done(function( data ) {
        $('.books-count').html(data);
    });
}