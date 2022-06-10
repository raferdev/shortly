import urlsRepository from "../../../rafael_modules/urls/index.js";

async function getUrlController(req, res) {
    const {id} = req.params;
    
  try {
    const result = await urlsRepository.getIdShortLink(id);

    if (result.rowCount === 0) {
        return res.sendStatus(404);
      }
      
    let shortLink =  {
      id:result.rows[0].id,
      shortUrl:result.rows[0].shortLink,
      url:result.rows[0].link
    };

    res.send(shortLink)
  } catch (error) {
      
    console.log(error);
    res.sendStatus(500);
  }
};

export default getUrlController;
