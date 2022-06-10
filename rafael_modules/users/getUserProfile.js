import db from "../../db/db.js"

async function getUserProfile(id) {

	return await db.query('SELECT u.id, u.name, COUNT(a.id) as "visitCount",s.id FROM "users" u JOIN "shortLinks" s ON u.id = s."userId" JOIN "accessControl" a ON s."id" = a."linkId" WHERE u.id = 3 GROUP BY s.id, a."linkId", u.id;');

}

export default getUserProfile;