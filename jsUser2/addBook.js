const leftSide = document.querySelector(".left-side")
const rightSide = document.querySelector(".right-side")
const closeBtn = document.querySelector(".close-add")
const addPanel = document.querySelector(".add-panel")
const addBook = document.querySelector(".add-book")
const nameA = document.querySelector(".name")
const surname = document.querySelector(".surname")
const title = document.querySelector(".title")
const price = document.querySelector(".price")
const submitAdd = document.querySelector(".submit-add")

const turnOn = () => {
    leftSide.style.display = "none"
    rightSide.style.display = "none"
    addPanel.style.display = "flex"
}
const turnOff = () => {
    leftSide.style.display = "flex"
    rightSide.style.display = "flex"
    addPanel.style.display = "none"
}
const isEmpty = (text) => {
    return text == "" ? true : false
}
const validation = () => {
    let stepValidation = 0
    if(isEmpty(nameA.value)){
        alert("Puste pole imię.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(surname.value)){
        alert("Puste pole nazwisko.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(title.value)){
        alert("Puste pole z tytułem książki.")
    }
    else{
        stepValidation++
    }
    if(isEmpty(price.value)){
        alert("Puste pole z ceną.")
    }
    else{
        stepValidation++
    }
    if(stepValidation == 4){
        return true
    }
}
const addBookToDatabase = () => {
    console.log(
    $.ajax({
		url: "../pushData/add-books-to-database.php",
		type: "POST",
		data: {
			name: nameA.value,
            surname: surname.value,
            title: title.value,
            price: price.value
		 },
		cache: false,
		success: function(){
            alert("Udało się poprawnie dodać książkę!")
            getBooks()
            getAuthors()
            getCountBooks()
            getLastItem()
        }
	    }))
}

addBook.addEventListener("click",() => {
    turnOn()
})
closeBtn.addEventListener("click",() => {
    turnOff()
})
submitAdd.addEventListener("click",() => {
    if(validation()){
        addBookToDatabase()
        turnOff()
    }
})