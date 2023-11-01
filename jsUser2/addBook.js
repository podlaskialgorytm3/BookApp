const leftSide = document.querySelector(".left-side")
const rightSide = document.querySelector(".right-side")
const closeBtn = document.querySelector(".close-add")
const addPanel = document.querySelector(".add-panel")
const addBook = document.querySelector(".add-book")
const nameA = document.querySelector(".name")
const surname = document.querySelector(".surname")
const title = document.querySelector(".title")
const price = document.querySelector(".price")

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
        console.log("Poprawna walidacja!")
        //addBookToDatabase()
    }
}
const addBookToDatabase = () => {
    $.ajax({
		url: "",
		type: "POST",
		data: {
			
		 },
		cache: false,
		success: function(){
            
        }
	    })
}


addBook.addEventListener("click",() => {
    turnOn()
})
closeBtn.addEventListener("click",() => {
    turnOff()
})