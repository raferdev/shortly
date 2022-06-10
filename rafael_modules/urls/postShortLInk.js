import db from "../../db/db.js";

async function postShortLink(url,shortUrl,userId) {

  return await db.query(
    'INSERT INTO "shortLinks" ("link","shortLink","userId") VALUES ($1,$2,$3);',
    [url,shortUrl,userId]
  );

}

export default postShortLink;
