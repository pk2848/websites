var cart = [];

function addToCart(id, name, price) {
  var item = {
    id: id,
    name: name,
    price: price
  };

  cart.push(item);
}

function removeFromCart(id) {
  cart = cart.filter(function(item) {
    return item.id !== id;
  });
}

function getTotalPrice() {
  var totalPrice = 0;

  cart.forEach(function(item) {
    totalPrice += item.price;
  });

  return totalPrice;
}

function updateCartBadge() {
  var badge = document.querySelector('.cart-badge');

  if (badge) {
    badge.textContent = cart.length;
  }
}
