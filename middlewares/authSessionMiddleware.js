import authRepository from "../rafael_modules/auth/index.js";

async function authSessionMiddleware(req, res, next) {

    const authorization = req.headers.authorization;
    const token = authorization?.replace("Bearer", "").trim();

  try {
    const result = await authRepository.searchSession(token);

    if (result.rowCount === 0) {
        return res.sendStatus(401);
      }

      const { userId } = result.rows[0];

    req.userId = userId;
  } catch (error) {

    console.log(error);
    return res.sendStatus(500);
  }
  next();
}

export default authSessionMiddleware;