function resp() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


$(document).ready(function(){
    $(".game").click(function(){
        $("#gameinfo").show();
        $("#home").hide();
        $("#locations").hide();
        $("#chat").hide();
        $("#teams").hide();
    });

    $(".locations").click(function() {
        $("#locations").show();
        $("#home").hide();
        $("#chat").hide();
        $("#teams").hide();
        $("#gameinfo").hide();

    });
    $(".home").click(function() {
        $("#home").show();
        $("#chat").hide();
        $("#teams").hide();
        $("#gameinfo").hide();
        $("#locations").hide();

    });
    $(".chat").click(function() {
        $("#chat").show();
        $("#home").hide();
        $("#teams").hide();
        $("#gameinfo").hide();
        $("#locations").hide();

    });
    $(".teams").click(function() {
        $("#teams").show();
        $("#home").hide();
        $("#chat").hide();
        $("#gameinfo").hide();
        $("#locations").hide();

    });
});

function goBack() {
    window.history.back();
}


