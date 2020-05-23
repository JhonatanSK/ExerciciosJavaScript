const promotions = ['SINGLE LOOK', 'DOUBLE LOOK', 'TRIPLE LOOK', 'FULL LOOK'];

function getProductPromotion(product, typePromotion) {
	const { promotions } = product;
	for (let promotion of promotions) {
		const { looks } = promotion;
		for (let look of looks) {
			if (look.includes(typePromotion))	return promotion.price;
		}
	}
	return product.regularPrice;
}

function getProductDiscount(ids, productsList) {
	let promotion = [];
	for (productId of ids) {
		const product = productsList.filter((product) => product.id === productId);
		const { category } = product[0];
		if (!promotion.includes(category))	promotion.push(category);
	}
	switch (promotion.length) {
		case 1 : return promotions[0];
		case 2 : return promotions[1];
		case 3 : return promotions[2];
		case 4 : return promotions[3];
		default : break;
	}
}

function getProducts(ids, productsList){
	let products = [];
	ids.map(
		(idProduct) => {
			const product = productsList.filter((product) => product.id === idProduct)[0];
			const { name, category} = product;
			products.push({ name, category });
		}
	)
	return products;
}

function getValue(ids, productsList){
	let value = 0;

	ids.map(
		(idProduct) => {
			const product = productsList.filter((product) => product.id === idProduct)[0];
			const { regularPrice } = product;
			value += regularPrice;
		}
	)
	return value;
}

function getDiscountValue(ids, productsList){
	let valueDiscount = 0;
	let promotion = getProductDiscount(ids, productsList);

	ids.map(
		(idProduct) => {
			const product = productsList.filter((product) => product.id === idProduct)[0];
			valueDiscount += getProductPromotion(product, promotion);
		}
	)
	return valueDiscount;
}

function getShoppingCart(ids, productsList) {
	let valueDiscount = getDiscountValue(ids, productsList);
	let value = getValue(ids, productsList);
	let products = getProducts(ids, productsList);
	let promotion = getProductDiscount(ids, productsList);
	let totalPrice = valueDiscount.toFixed(2);
	let discountValue = (value - valueDiscount).toFixed(2);
	let discount = 	(100 * (discountValue / value)).toFixed(2) + '%';

	let result = {
		products,
		promotion,
		totalPrice,
		discountValue,
		discount
	}

	return result;
}

module.exports = { getShoppingCart };
