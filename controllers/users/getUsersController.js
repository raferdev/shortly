import userRepository from "../../rafael_modules/users/index.js";

async function getUsersController(req, res) {
  const { id } = req.params;
  const userId = req.userId;

  if (parseInt(id) !== parseInt(userId)) {
    return res.sendStatus(401);
  }

  try {

    const result = await userRepository.getUserProfile(id);

    res.send(result.rows);

  } catch (error) {

    console.log(error);
    res.sendStatus(500);
  }
}

export default getUsersController;
