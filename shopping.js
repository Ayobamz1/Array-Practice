let cart = [];

function addItem() {
    let input = document.getElementById("input").value;

    if (input.trim() == "") {
        let displayArea = document.getElementById("displayArea");
        displayArea.innerHTML = "Enter an Item";
    }
}