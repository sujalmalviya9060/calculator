let string = "";
let button = document.querySelectorAll(".button")
button.forEach((element) => {
    element.addEventListener("click",onClick)
});
function onClick (e){
    if(e.target.innerHTML == "AC"){
        string = ""
        document.querySelector("input").value = string
    }
    else if( e.target.innerHTML == "C"){
        toString(string)
        string = string.slice(0,-1)
        document.querySelector("input").value = string
    }
    else if( e.target.innerHTML == "="){
        string = eval(string)
        document.querySelector("input").value = string
    }
    else{
        string = string + e.target.innerHTML
        document.querySelector("input").value = string
    }
}