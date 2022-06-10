import urlsRepository from "../../../rafael_modules/urls/index.js";

async function getOpenUrlController(req, res) {
  const { shortUrl } = req.params;

  try {
    const result = await urlsRepository.getLink(shortUrl);

    if (result.rowCount === 0) {
      return res.sendStatus(404);
    }

    const { id, link } = result.rows[0];

    await urlsRepository.postAccess(id);

    res.redirect(link);
    
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default getOpenUrlController;
