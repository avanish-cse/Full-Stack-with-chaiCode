document.addEventListener("DOMContentLoaded", () => {
  const productList = document.querySelector("#product-list");
  const cartItems = document.querySelector("#cart-items");
  const emptyCartMessage = document.querySelector("#empty-cart");
  const cartTotal = document.querySelector("#cart-total");
  const totalPriceDisplay = document.querySelector("#total-price");
  const checkOutBtn = document.querySelector("#checkout-btn");

  const products = [
    { id: 1, name: "Samosa", price: 10.99 },
    { id: 2, name: "Raabadiai", price: 20.99 },
    { id: 3, name: "Ras-Malai", price: 25.999 },
    { id: 4, name: "Barfi", price: 20.995 },
  ];

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name}: $${product.price.toFixed(2)}</span>
<button data-id= "${product.id}">Add to cart</button>
    `;
    productList.appendChild(productDiv);
  });

  productList.addEventListener("click", (evt) => {
    if (evt.target.tagName === "BUTTON") {
      const productId = parseInt(evt.target.getAttribute("data-id"));
      console.log(productId);
      const product = products.find((p) => p.id === productId);
      addToCart(product);
      console.log(product);
    }
  });

  function addToCart(product) {
    if (!emptyCartMessage.classList.contains("hidden")) {
      emptyCartMessage.classList.add("hidden");}
      const div = document.createElement('div');
      div.innerHTML = `
      <span>${product.name}: $${product.price.toFixed(2)}</span>
      `;
      div.classList.add('product')
      cartItems.appendChild(div);
    
  }
});
