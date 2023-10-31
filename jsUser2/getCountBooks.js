function getCountBooks(){
    $.ajax({
        url: "../getDataUser2/get-count-books.php",
        method: 'POST'
    }).done(function( data ) {
        $('.books-count').html(data);
    })
}
$(document).ready(function(){
    getCountBooks();
});

