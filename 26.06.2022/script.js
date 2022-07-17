const btnShoppingCart = document.getElementById('showcart');

const showShoppingCart = function() {
	const shoppingBag = document.getElementById('bag');
	shoppingBag.classList.toggle('hide');
}

btnShoppingCart.addEventListener('click', showShoppingCart);