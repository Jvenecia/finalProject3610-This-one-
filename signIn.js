let namePlace = document.querySelector(".namePlace");
let submit = document.getElementById("submitButton");
if (localStorage.getItem("Name") != ""){
    namePlace.innerText = `Welcome, ${localStorage.getItem("Name")}!`
    let placeHolder = localStorage.getItem("Name");
    localStorage.setItem("Name", placeHolder);
}
else{
    let placeHolder = "";
    localStorage.setItem("Name", placeHolder);
}

submit.addEventListener('click', function(e){
    e.preventDefault();
    let name = document.getElementById("inputName").value;
    localStorage.setItem("Name", name)
    console.log(name);
    namePlace.innerText = `Welcome, ${name}!`;
})
