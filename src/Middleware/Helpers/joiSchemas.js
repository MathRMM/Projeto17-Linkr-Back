import joi from 'joi';

const accountSchema = joi.object({
    email: joi.string().email().required().trim(),
    username: joi.string().required().trim(),
    password: joi.string().required().trim(),
    picUrl: joi.string().uri().trim(),
});

const loginSchema = joi.object({
    email: joi.string().email().required().trim(),
    password: joi.string().required().trim(),
});

const newPostSchema = joi.object({
    url: joi.string().uri().required(),
    comment: joi.string().empty(''),
  });


export { accountSchema, loginSchema, newPostSchema };