import { createFlower } from "./create-flower.js";
import { fetchFlowers, postFlower } from "./flowers-api.js";
import { imageToBase64 } from "./image-helpers.js";

const form = document.getElementById("create-flower");

form.addEventListener("submit", async (event) => {
  console.log("Hello from Form");
  event.preventDefault();
  const data = new FormData(form);

  const name = data.get("name");
  console.log(name);

  const price = data.get("price");
  console.log(price);

  const image = data.get("image");
  console.log(image);

  const base64 = await imageToBase64(image);
  console.log(base64);

  const flower = {
    name: name,
    price: price,
    img_base64: base64,
  };

  const x = postFlower(flower);
});

async function load() {
  const body = await fetchFlowers();

  body.forEach((x) => {
    createFlower(x);
  });
}

load();
