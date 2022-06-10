import db from "../../db/db.js"

async function getLink(shortLink) {

	return await db.query('SELECT id,"link" FROM "shortLinks" WHERE "shortLink"=$1;', [shortLink]);
}

export default getLink;