const mainContent = document.getElementById("main-content");

const flower1 = {
  id: 1,
  name: "Small flowers",
  price: 150,
  imgUrl:
    "https://images.unsplash.com/photo-1610878237046-c55686f6000a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3087&q=80",
};

const flower2 = {
  id: 2,
  name: "Medium flowers",
  price: 250,
  imgUrl:
    "https://plus.unsplash.com/premium_photo-1668611400851-766fe4f6ac1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3086&q=80",
};

const flower3 = {
  id: 3,
  name: "Large flowers",
  price: 500,
  imgUrl:
    "https://images.unsplash.com/photo-1572454591674-2739f30d8c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
};

const allFlowers = [flower1, flower2, flower3];

allFlowers.forEach((x) => {
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
});
