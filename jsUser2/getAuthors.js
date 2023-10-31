function getAuthors(){
    $.ajax({
        url: "../getDataUser2/get-authors.php",
        method: 'POST'
    }).done(function( data ) {
        $('#find-writer').html(data);
    })
}
$(document).ready(function(){
    getAuthors();
});