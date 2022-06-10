import db from "../../db/db.js";

async function getRanking() {

	return await db.query('SELECT u.id,u.name,COUNT(DISTINCT s.id) as "linksCount",COUNT(a.id) as "visitCount" FROM "users" u LEFT JOIN "shortLinks" s ON u.id = s."userId" LEFT JOIN "accessControl" a ON s."id" = a."linkId" GROUP BY u.id ORDER BY "visitCount" DESC LIMIT 10;');
}

export default getRanking;