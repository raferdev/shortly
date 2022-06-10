import db from "../../db/db.js"

async function getIdShortLink(id) {
	return await db.query('SELECT "id","link","shortLink" FROM "shortLinks" WHERE id=$1;', [id]);
}

export default getIdShortLink;