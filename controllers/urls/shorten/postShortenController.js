import { nanoid } from "nanoid";
import urlsRepository from "../../../rafael_modules/urls/index.js";

async function postShortenController(req, res) {
  const { url } = req.body;
  const userId = req.userId;
  const shortUrl = nanoid();
  try {
    await urlsRepository.postShortLink(url,shortUrl,userId);

    res.send({shortUrl}).status(201)
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}

export default postShortenController;
