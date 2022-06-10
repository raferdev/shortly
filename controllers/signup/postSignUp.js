import authRepository from "../../rafael_modules/auth/index.js";

async function postSignUp(req, res) {
  const { name, email, password, confirmPassword } = req.body;

  if(password!==confirmPassword) {
    return res.status(422).send("erro : password não coincide");
  }

  const passwordHash = authRepository.hashPassword(password);
  
  try {
    
    await authRepository.postSignUp(name, email, passwordHash);

    return res.sendStatus(201);

  } catch (error) {

    console.log(error);
    return res.status(500).send(error);
  }
}

export default postSignUp;
