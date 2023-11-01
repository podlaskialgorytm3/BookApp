edit = document.querySelectorAll(".edit")
editPanel = document.querySelector(".edit-panel")
closeEdit = document.querySelector(".close-edit")
nameEdit = document.querySelector(".name-edit")
surnameEdit = document.querySelector(".surname-edit")
titleEdit = document.querySelector(".title-edit")
priceEdit = document.querySelector(".price-edit")
submitEdit = document.querySelector(".submit-edit")

turnOnEdit = () => {
    leftSide.style.display = "none"
    rightSide.style.display = "none"
    editPanel.style.display = "flex"
}
turnOffEdit = () => {
    leftSide.style.display = "flex"
    rightSide.style.display = "flex"
    editPanel.style.display = "none"
}
completingData = (id) => {
    const ajax = new XMLHttpRequest();
    ajax.open("GET","../fetchData/fetch-book.php" , true);
    ajax.send();
    ajax.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let database = JSON.parse(this.responseText);
            for(let i = 0; i < database.length; i++){
                if(database[i].idksiazki == id){
                    nameEdit.value = database[i].imieautora
                    surnameEdit.value = database[i].nazwiskoautora
                    titleEdit.value = database[i].tytul
                    priceEdit.value = database[i].cena
                } 
            }
    }}
}
validationEdit = () => {
    let stepValidation = 0
    if(isEmpty(nameEdit.value)){
        alert("Puste pole imię.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(surnameEdit.value)){
        alert("Puste pole nazwisko.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(titleEdit.value)){
        alert("Puste pole z tytułem książki.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(priceEdit.value)){
        alert("Puste pole z ceną.")
    }
    else{
        stepValidation++
    }
    if(stepValidation == 4){
        return true
    }
}
editBooks = (id) => {
    $.ajax({
		url: "../pushData/edit-books.php",
		type: "POST",
		data: {
            id: id,
            name: nameEdit.value,
            surname: surnameEdit.value,
            title: titleEdit.value,
            price: priceEdit.value
		 },
		cache: false,
		success: function(){
                getAuthors()
                getBooks()
                alert("Udało się edytować książkę!")
            }
	    })
}


edit.forEach(button => {
    let numberAttempts = 0
    button.addEventListener("click",() => {
        turnOnEdit()
        completingData(button.dataset.id)
        numberAttempts = 0
        submitEdit.addEventListener("click",() => {
            if(validationEdit && numberAttempts == 0){
                editBooks(button.dataset.id)
                turnOffEdit()
                numberAttempts++
            }
        })
    })
});
closeEdit.addEventListener("click",() => {
    turnOffEdit()
})