const activeLocal = true;

function getDomainName() {
	if (activeLocal) {
		return "http://localhost:5000";
	} else {
		return "Put-Your-Backend-Url and 'activeLocal' -> set to 'false'";
	}
}

const domainName = getDomainName();

//-----cart URL------

const cartUserId = (user_id) => {
	return `${domainName}/cart/${user_id}`;
};

//-------getting cart element number--------

const cartCountUrl = () => `${domainName}/count`;

//inserting url for cart item
const insertInCartUrl = () => `${domainName}/cart`;

//deleteing url from cart
// /cart/delete/:cartId
const deleteFromCartUrl = (cart_id) => `${domainName}/cart/delete/${cart_id}`;

//---------------

//--------sign in----------------
const signupUrl = () => `${domainName}/signup`;

//------------log in----------------

const logInUrl = () => `${domainName}/login`;

//-------------------------

//get one Product
const getOneProductUrl = (id) => `${domainName}/products/${id}`;

//get all product
const allProductsUrl = () => `${domainName}/products`;

export {
	cartUserId,
	insertInCartUrl,
	deleteFromCartUrl,
	signupUrl,
	logInUrl,
	cartCountUrl,
	getOneProductUrl,
	allProductsUrl,
};
