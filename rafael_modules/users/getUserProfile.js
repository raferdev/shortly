import db from "../../db/db.js"

async function getUserProfile(id) {
	return await db.query(`SELECT u.id, u.name, SUM(COUNT(a.id))  OVER (ORDER BY u.id) as "visitCount",s.id as "shortId", s."shortLink",s.link,COUNT(a.id) as "shortCount" FROM "accessControl" a LEFT JOIN "shortLinks" s ON s.id = a."linkId" JOIN "users" u ON u."id" = s."userId" WHERE u.id = $1 GROUP BY s.id, a."linkId", u.id;`,[id]);

}

export default getUserProfile;