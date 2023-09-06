const mainContent = document.getElementById("main-content");

export function createFlower(x) {
  console.log(x.id);

  // Hiver fat i skabelonen fra HTML
  const template = document.getElementById("template");

  // Clone template
  const clone = document.importNode(template.content, true);

  // Udfylder img på kopien
  const img = clone.getElementById("img");
  img.src = x.imgUrl;
  img.id = "image-" + x.id;

  // Udfylde minus knappen
  const minusClone = clone.getElementById("minus-button");
  minusClone.id = "minus-button-" + x.id;

  // Udfylde nyt ID for amount p-tag
  const cloneP = clone.getElementById("amount");
  cloneP.id = "amount-" + x.id;

  // Udfylde nyt ID for amount plus button
  const addClone = clone.getElementById("add-button");
  addClone.id = "add-button-" + x.id;

  addClone.addEventListener("click", () => {
    console.log("hej fra plus knap");
    cloneP.innerText = Number(cloneP.innerText) + 1;
  });

  minusClone.addEventListener("click", () => {
    if (Number(cloneP.innerText)) {
      cloneP.innerText = Number(cloneP.innerText) - 1;
      // TODO : Subtract 250kr from total
    }
  });

  // Sætter den udfyldte kopi ind på hjemmesiden
  mainContent.appendChild(clone);
}
