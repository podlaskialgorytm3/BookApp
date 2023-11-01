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




edit.forEach(button => {
    button.addEventListener("click",() => {
        turnOnEdit()
        completingData(button.dataset.id)
        console.log(button.dataset.id)
    })
});
closeEdit.addEventListener("click",() => {
    turnOffEdit()
})