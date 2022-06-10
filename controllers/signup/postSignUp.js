import authRepository from "../../rafael_modules/auth/index.js";

async function postSignUp(req, res) {
  const { name, email, password } = req.body;

  const passwordHash = authRepository.hashPassword(password);
  
  try {
    
    await authRepository.postSignUp(name, email, passwordHash);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export default postSignUp;
