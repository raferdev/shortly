import joi from "joi";

function schemaMiddleware(req, res, next) {
    console.log(req.route.path)
  const body = req.body;

  if (req.route.path === "/signup") {
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

    next();
  }
  if (req.route.path === "/signin") {

    const signInSchema = joi.object({
      name: joi.string().required(),
      email: joi.string().email().required(),
      password: joi.string().required(),
    });

    const validation = signInSchema.validate(body);

    if (validation.error) {
      return res.status(422).send(validation.error.details);
    }
    next();
  }
  if (req.route.path === "/urls/shorten") {

    const signInSchema = joi.object({
      url: joi.string().uri().required(),
    });

    const validation = signInSchema.validate(body);

    if (validation.error) {
      return res.status(422).send(validation.error.details);
    }

    next();
  }
  return res.sendStatus(404)
}

export default schemaMiddleware;
