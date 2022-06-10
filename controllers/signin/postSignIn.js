import authRepository from "../../rafael_modules/auth/index.js";

async function postSignIn(req, res) {
  const { email, password } = req.body;

  try {
    const result = await authRepository.postSignIn(email);

    if (result.rowCount === 0) {
      return res.sendStatus(401);
    }

    const { id, password: hash } = result.rows[0];

    let auth = authRepository.compPassword(password, hash);

    if (!auth) {
      return res.sendStatus(401);
    }
    
    let token =  await authRepository.postSession(id);

    res.send(token).status(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
export default postSignIn;
