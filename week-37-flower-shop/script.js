import { createFlower } from "./create-flower.js";
import { fetchFlowers } from "./flowers-api.js";

const form = document.getElementById("create-flower");

form.addEventListener("submit", (event) => {
  console.log("Hello from Form");
  event.preventDefault();
});

async function load() {
  const body = await fetchFlowers();

  body.forEach((x) => {
    createFlower(x);
  });
}

load();
