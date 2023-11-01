deletes = document.querySelectorAll(".delete")

deletes.forEach(button => {
    button.addEventListener("click",() => {
        let question = confirm("Czy na pewno chcesz usunąć książkę?")
        if(question){
            $.ajax({
                url: "../removeData/remove-book-from-database.php",
                type: "POST",
                data: {
                    id: button.dataset.id
                 },
                cache: false,
                success: function(){
                    alert("Udało się usunąć książkę!")
                    getBooks()
                    }
                })
        }
    })
});