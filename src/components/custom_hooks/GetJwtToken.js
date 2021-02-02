const TokenKey = "token";

function GetJwtToken() {
	return localStorage.getItem(TokenKey);
}

export default GetJwtToken;
