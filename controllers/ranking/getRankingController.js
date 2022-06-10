import rankRepository from "../../rafael_modules/ranking/index.js";

async function getRankingController(req,res) {
    try {
        const result = await rankRepository.getRanking();

        res.status(200).send(result.rows)
    } catch(error) {

        console.log(error)
        res.sendStatus(500);
    }
}
export default getRankingController;