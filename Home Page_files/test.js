function resp() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function gameInfo() {
    var x = document.getElementById("gameinfo");
    var y = document.getElementById("home")
    if (x.style.display !== "none") {
        x.style.display = "block";
        y.style.display = "none";

    } else {
        x.style.display = "none";
    }
}