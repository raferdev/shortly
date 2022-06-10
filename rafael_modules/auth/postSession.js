import db from "../../db/db.js";
import { v4 as uuid } from 'uuid';

async function postSession(id) {
    const token = uuid();

    await db.query(
        'INSERT INTO "sessions" ("userId","token") VALUES ($1,$2);',
        [id,token]
      );
  return token
}

export default postSession;
