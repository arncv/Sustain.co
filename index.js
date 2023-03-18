// Add to Cart functionality
let cartItems = 0;
const addToCartBtns = document.querySelectorAll('.product button');

addToCartBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		cartItems++;
		updateCart();
	});
});

function updateCart() {
	const cartCount = document.querySelector('.cart-count');
	cartCount.innerText = cartItems;
}
