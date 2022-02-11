var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementsById("loader").style.display = "none";

    document.getElementById("myDiv").style.display = "block";
}