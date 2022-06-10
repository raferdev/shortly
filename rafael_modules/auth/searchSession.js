import db from "../../db/db.js"

async function searchSession(token) {
	return await db.query('SELECT id FROM sessions WHERE token=$1;', [token]);
}

export default searchSession;