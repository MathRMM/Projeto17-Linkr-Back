import joi from "joi";

const creatPostSchema = joi.object({
  url: joi.string().uri().required(),
  comment: joi.string(),
});

export { creatPostSchema };
