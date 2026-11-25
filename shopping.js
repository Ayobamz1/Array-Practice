// let cart =  [];
let cart = JSON.parse(localStorage.getItem('item')) || [];

// let getItem = JSON.parse(localStorage.getItem('item'));

// if (getItem) {
//   cart = getItem
// } else {
//   cart = []
// }

function addItem() {
  let input = document.getElementById("input").value;
  let alertBox = document.getElementById("display");

  if (input.trim() == "") {
    alertBox.innerHTML = "ENTER AN ITEM";
  } else {
    alertBox.innerHTML = "";
    cart.push(input);
    localStorage.setItem('item', JSON.stringify(cart))
    document.getElementById("input").value = "";

    displayItem();
  }
}

function displayItem() {
  let displayArea = document.getElementById("displayArea");

  displayArea.innerHTML = "";

  if (cart.length == 0) {
    displayArea.innerHTML = "Your Item(s) will show here";
  }

  for (let index = 0; index < cart.length; index++) {
    displayArea.innerHTML += `
      <p>${index + 1}. ${cart[index]}</p>
      <button onclick="removeItem(${index})" class="btn btn-primary mb-3">
        Delete
      </button>
    `;
  }
}

function deleteItem() {
  let check = confirm("Are you sure you want to delete?");

  if (check == false) {
    return;
  }

  if (cart.length == 0) {
    alert("There is nothing to delete");
    return;
  }

  cart.splice(-1, 1);
  localStorage.setItem('item', JSON.stringify(cart));
  displayItem();
}

function deleteAll() {
  let check = confirm("Are you sure you want to delete?");

  if (check == false) {
    return;
  }

  if (cart.length == 0) {
    alert("There is nothing to delete");
    return;
  }

  cart = [];
  localStorage.setItem('item', JSON.stringify(cart));
  displayItem();
}

function removeItem(i) {
  let check = confirm("Are you sure you want to delete?");

  if (check) {
    cart.splice(i, 1);
    localStorage.setItem('item', JSON.stringify(cart));
    displayItem();
  }
}
