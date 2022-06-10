import db from "../../db/db.js"

async function searchSession(token) {
	return await db.query('SELECT "userId" FROM sessions WHERE token=$1;', [token]);
}

export default searchSession;