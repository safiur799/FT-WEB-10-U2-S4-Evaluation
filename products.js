let data_div = document.getElementById("catlog");
function showItem(p) {
  var arr = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "2000000",
      brand: "Chopard",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "3000000",
      brand: "Mikimoto",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "4000000",
      brand: "Dior",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "5000000",
      brand: "Bvlgari",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "6000000",
      brand: "Chopard",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "7000000",
      brand: "Chopard",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "8000000",
      brand: "Mikimoto",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81aUa3LrDzL._UL1500_.jpg",
      price: "9000000",
      brand: "Mikimoto",
    },
    {
      img: "https://timesofindia.indiatimes.com/thumb/msid-80268380,width-1200,height-900,resizemode-4/.jpg",
      price: "5500000",
      brand: "Dior",
    },
  ];

  var data = p;
  data.forEach(function (el) {
    let div = document.createElement("div");
    let img = document.createElement("img");
    img.src = el.img;
    img.style.width = "100px";
    img.style.height = "50px";

    let price = document.createElement("p");
    price.innerHTML = el.price;

    let btn = document.createElement("button");
    btn.innerHTML = "Add to Cart";

    btn.addEventListener("click", addItem);

    btn.style.width = "100px";
    btn.style.height = "30px";

    let brand = document.createElement("p");
    brand.innerHTML = el.brand;

    div.style.display = "grid";

    div.append(img, price, brand, btn);
    data_div.append(div);
  });
}

showItem(JSON.parse(localStorage.getItem("jewellery")));

function sortLH() {
  let data = JSON.parse(localStorage.getItem("jewellery"));

  data = data.sort(function (a, b) {
    return a.price - b.price;
  });
  showItem(data);
}
function sortHL() {
  let data = JSON.parse(localStorage.getItem("jewellery"));

  data = data.sort(function (a, b) {
    return b.price - a.price;
  });
  showItem(data);
}

function addItem() {}
