const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "img/1.png",
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "img/2.png",
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "img/3.png",
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "img/4.png",
  },
];

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "img/5.png",
    colors: ["blue", "black"],
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "img/6.png",
    colors: ["red", "green"],
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "img/7.png",
    colors: ["yellow", "orange"],
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "img/8.png",
    colors: ["purple", "pink"],
  },
];

const createSec1 = document.querySelector("#add1");
const createSec2 = document.querySelector("#add2");
createSec1.addEventListener("click", function () {
  for (let i = 0; i < products1.length; i++) {
    let row = document.querySelector(".row1");

    let card = document.createElement("div");
    card.className = "box";
    row.appendChild(card);

    let img = document.createElement("img");
    img.src = products1[i].img;
    card.appendChild(img);

    let title = document.createElement("p");
    title.textContent = products1[i].title;
    card.appendChild(title);

    let price = document.createElement("p");
    price.textContent = products1[i].price;
  }
  createSec1.style.display = "none";
});
createSec2.addEventListener("click", function () {
  for (let i = 0; i < products2.length; i++) {
    let row = document.querySelector(".row2");

    let card = document.createElement("div");
    card.className = "box";
    row.appendChild(card);

    let img = document.createElement("img");
    img.src = products2[i].img;
    card.appendChild(img);

    let title = document.createElement("p");
    title.textContent = products2[i].title;
    card.appendChild(title);

    let price = document.createElement("p");
    price.textContent = products2[i].price;
    createSec2.style.display = "none";

    let colorDiv = document.createElement("div");
    colorDiv.className = "color";
    let colorBox1 = document.createElement("div");
    let colorBox2 = document.createElement("div");
    colorBox1.className = "colorBox";
    colorBox2.className = "colorBox";
    colorBox1.style.backgroundColor = products2[i].colors[0];
    colorBox2.style.backgroundColor = products2[i].colors[1];
    colorDiv.appendChild(colorBox1);
    colorDiv.appendChild(colorBox2);
    card.appendChild(colorDiv);
  }
});
