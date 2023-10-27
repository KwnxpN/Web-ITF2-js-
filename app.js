function display(){
    document.getElementById("my_username").innerHTML = document.getElementById("get_username").value + "'s Gallery"
    document.getElementById("get_username").value = "";
}

function setimage(){
    document.getElementById("profileimg").style.backgroundImage = "url(" + document.getElementById("get_url").value + ")"
}