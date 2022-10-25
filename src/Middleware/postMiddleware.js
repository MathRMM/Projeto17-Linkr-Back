import { newPostSchema } from "./Helpers/joiSchemas.js";

export function validateSchema(req, res, next) {
    const { error } = newPostSchema.validate(req.body, {
      abortEarly: false,
    });

    if (error) {
      const messageError = error.details.map((item) => item.message);
      return res.status(422).send(messageError);
    }

    next();

}
