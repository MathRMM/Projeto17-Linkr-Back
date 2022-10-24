export default class Validation {
    static validateSchema(schema) {
        return async (req, res, next) => {
            let validation = schema.validate(req.body, { abortEarly: false });

            if (validation.error) {
                const errors = validation.error.details.map(detail => detail.message);
                res.status(400).send(errors);
                return;
            }
            res.locals.validation = validation;
            next();
        }
    }
}