import userRepository from "../../rafael_modules/users/index.js";

async function getUsersController(req, res) {
  const { id } = req.params;
  const userId = req.userId;

  if (parseInt(id) !== parseInt(userId)) {
    return res.status(401).send("erro: Usuário logado diferente do usuário requisitado.");
  }

  try {
    const result = await userRepository.getUserProfile(id);

    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    let body = {
      id: result.rows[0].id,
      name: result.rows[0].name,
      visitCount: result.rows[0].visitCount,
      shortenedUrls: [],
    };

    result.rows.forEach((row) => {
      let obj = {
        id: row.shortId,
        shortUrl: row.shortLink,
        url: row.link,
        visitCount: row.shortCount,
      };
      body.shortenedUrls.push(obj);
    });

    res.status(200).send(body);
  } catch (error) {

    console.log(error);
    res.sendStatus(500);
  }
}

export default getUsersController;
