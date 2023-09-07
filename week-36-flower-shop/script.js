import { createFlower } from "./create-flower.js";
import { fetchFlowers } from "./flowers-api.js";

const form = document.getElementById("create-flower");
form.addEventListener("submit", (event) => {
  console.log("Hello from Form");
  event.preventDefault();
});

/*
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
*/

async function load() {
  const body = await fetchFlowers();

  body.forEach((x) => {
    createFlower(x);
  });
}

load();
