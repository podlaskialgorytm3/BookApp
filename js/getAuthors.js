function getAuthors(){
    $.ajax({
        url: "../getData/get-authors.php",
        method: 'POST'
    }).done(function( data ) {
        $('#find-writer').html(data);
    })
}
$(document).ready(function(){
    getAuthors();
});