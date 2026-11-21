let cart = [];

function addItem() {
  let input = document.getElementById("input").value;
  let alertBox = document.getElementById("display");
  let displayArea = document.getElementById("displayArea");

  if (input.trim() == "") {
    alertBox.innerHTML = "Enter an Item".toUpperCase();
  } else {
    alertBox.innerHTML = "";
    cart.push(input);
    document.getElementById("input").value = "";
    displayArea.innerHTML = "";

    for (let index = 0; index < cart.length; index++) {
      document.getElementById("displayArea").innerHTML +=
        `<p>${index + 1}. ${cart[index]}</p>`;
    }
  }
}

function deleteItem() {
    // cart.pop();
    cart.splice(-1, 1);
    
    document.getElementById("displayArea").innerHTML = "";
        for (let index = 0; index < cart.length; index++) {
      document.getElementById("displayArea").innerHTML +=
        `<p>${index + 1}. ${cart[index]}</p>`;
    }
}
