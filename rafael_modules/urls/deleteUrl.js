import db from "../../db/db.js"

async function deleteUrl(id) {
	return await db.query('DELETE FROM "shortLinks" WHERE id=$1;', [id]);
}

export default deleteUrl;