import urlsRepository from "../../../rafael_modules/urls/index.js";

async function deleteUrlController(req, res) {
  const { id } = req.params;
  const reqId = req.userId
  try {
    const resultShortLink = await urlsRepository.getIdShortLink(id);

    if (resultShortLink.rowCount === 0) {
      return res.sendStatus(404);
    }

    const idLink = resultShortLink.rows[0].id;
    if (reqId !== idLink) {
      return res.sendStatus(401);
    }
    await urlsRepository.deleteUrl(id);
    
    res.sendStatus(204);

  } catch (error) {
      console.log(error);
      res.sendStatus(500)
  }
}

export default deleteUrlController;
