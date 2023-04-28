let namePlace = document.querySelector(".namePlace");
if (localStorage.getItem("Name") != ""){
    namePlace.innerText = `Welcome, ${localStorage.getItem("Name")}!`
    let placeHolder = localStorage.getItem("Name");
    localStorage.setItem("Name", placeHolder);
}
else{
    let placeHolder = "";
    localStorage.setItem("Name", placeHolder);
}


