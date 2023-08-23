const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");
const amountElement = document.getElementById("amount");

addButton.addEventListener("click", () => {
  //alert("Hej fra addbutton");
  amountElement.innerText = Number(amountElement.innerText) + 1;
  // TODO : Add 250kr to total
});

minusButton.addEventListener("click", () => {
  //alert("Hej fra minus button");
  if (!(Number(amountElement.innerText) == 0)) {
    amountElement.innerText = Number(amountElement.innerText) - 1;
    // TODO : Subtract 250kr from total
  }
});
