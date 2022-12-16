var x = document.querySelector(".topnav")
function myBars() {
    //console.log(x);
    if(x.className === "topnav"){
        x.className += "responsive";
    } else {
        x.className = "topnav";
    }
}
function myBars(x) { x.classList.toggle("change");}