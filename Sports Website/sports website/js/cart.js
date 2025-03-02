const cartButton = document.getElementById("cart-button");
      const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      addToCartButtons.forEach((button) => {
        button.addEventListener("click", () => {
          const productId = button.dataset.id;
          const productName = button.dataset.name;
          const productPrice = button.dataset.price;
          cart.push({ id: productId, name: productName, price: productPrice });
          localStorage.setItem("cart", JSON.stringify(cart));
          cartButton.innerText = `Cart (${cart.length})`;
        });
      });

      cartButton.addEventListener("click", () => {
        let cartContent = "";
        let total = 0;

        cart.forEach((product) => {
          cartContent += `
      <div class="cart-item">
        <p>${product.name}</p>
        <p>Price: Rs ${product.price}</p>
      </div>
    `;
          total += parseInt(product.price);
        });

        cartContent += `
    <div class="cart-item">
      <p>Total:</p>
      <p>Rs ${total}</p>
    </div>
  `;

        const cartModal = document.createElement("div");
        cartModal.classList.add("cart-modal");
        cartModal.innerHTML = `
    <div class="cart-content">
      <h2>Shopping Cart</h2>
      ${cartContent}
      <button class="checkout-button id="checkout-button"" >Checkout</button>
    </div>
  `;

        const checkoutButton = cartModal.querySelector(".checkout-button");
        checkoutButton.addEventListener("click", () => {
          // alert("Thank you for your purchase!");
          cart = [];
          localStorage.removeItem("cart");
          cartButton.innerText = "Cart (0)";
          cartModal.remove();
        });

        document.body.appendChild(cartModal);
      });
      var checkoutButton = document.getElementById("checkout-button");
      checkoutButton.addEventListener("click", function () {
        window.location.href = "https://chat.openai.com";
      });