import db from "../../db/db.js"

async function postSignUp(name,email,password) {
	return await db.query('INSERT INTO "users" (name,email,password) VALUES ($1,$2,$3);', [name,email,password]);
}

export default postSignUp;