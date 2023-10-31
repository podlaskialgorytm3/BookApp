function getBooks(){
    $.ajax({
        url: "../getData/get-books.php",
        method: 'POST'
    }).done(function( data ) {
        $('#books').html(data);
    })
}
$(document).ready(function(){
    getBooks();
});