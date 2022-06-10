import db from "../../db/db.js"

async function postSignIn(email) {
	return await db.query('SELECT id FROM users WHERE email=$1', [email]);
}

export const authRepository = {
	postSignIn
}