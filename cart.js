let data_div = document.getElementById("showCase");
function showCartElement() {
  let data = JSON.parse(localStorage.getItem("productItem"));

  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    img.style.width = "100px";
    img.style.height = "50px";

    let price = document.createElement("p");
    price.innerHTML = el.price;

    let brand = document.createElement("p");
    brand.innerHTML = el.brand;

    div.style.display = "grid";

    div.append(img, price, brand);
    data_div.append(div);
  });
}
showCartElement();
let totalPrice = 0;
let showP = document.getElementById("totalPrice");
function showPrice() {
  let data = JSON.parse(localStorage.getItem("productItem"));

  data.forEach(function (el) {
    totalPrice += Number(el.price);
  });
  console.log(totalPrice);

  let div = document.createElement("p");
  div.innerHTML = totalPrice;
  showP.append(div);
}
showPrice();

function Discount() {
  let p = document.getElementById("dis").value;

  if (p === "masai30") {
    let c = document.getElementById("totalPrice");
    let s = document.createElement("p");
    s.innerHTML = `new amount ${
      totalPrice - Math.floor((totalPrice * 30) / 100)
    }`;

    showP.append(s);
  }
}

function checkout() {
  window.location.href = "checkout.html";
}
