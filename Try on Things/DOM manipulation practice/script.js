function changeTextColor() {
    document.getElementById("change-me").style.color = "red";
}// this is for changing the text color of the paragraph with id "change-me" using getElementById.

//getElementsById is used to get the element with the specified id.

function changeBgColor() {
    var paragraphs = document.getElementsByTagName("p");
    for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.backgroundColor = "#f2f2f2";
    }
}// this is for changing the background color of all the paragraphs using getElementsByTagName.

//getElementsByTagName is used to get all the elements with the specified tag name.



function changeTextColorClass() {
    var elements = document.getElementsByClassName("changeable");
    for (var i = 0; i < elements.length; i++) {
        elements[i].style.color = "green";
    }
}// this is for changing the text color of all the elements with class "changeable" using getElementsByClassName.

//getElementsByClassName is used to get all the elements with the specified class name.