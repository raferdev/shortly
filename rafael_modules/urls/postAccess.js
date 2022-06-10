import db from "../../db/db.js";

async function postAccess(linkId) {

  return await db.query(
    'INSERT INTO "accessControl" ("linkId") VALUES ($1);',
    [linkId]
  );

}

export default postAccess;
