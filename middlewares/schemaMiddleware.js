import joi from "joi";

function schemaMiddleware(req, res, next) {
  const body = req.body;
  const path = req.route.path;

  if (path === "/signup") {
    const signInSchema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
      confirmPassword: joi.string().required(),
    });

    const validation = signInSchema.validate(body);

    if (validation.error) {
      return res.status(422).send(validation.error.details);
    }

    return next();
  }
  if (path === "/signin") {
    const signInSchema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const validation = signInSchema.validate(body);

    if (validation.error) {
      return res.status(422).send(validation.error.details);
    }
    return next();
  }
  if (path === "/urls/shorten") {
    const signInSchema = joi.object({
      url: joi.string().uri().required(),
    });

    const validation = signInSchema.validate(body);

    if (validation.error) {
      return res.status(422).send(validation.error.details);
    }

    return next();
  }
  return res.sendStatus(422);
}

export default schemaMiddleware;
