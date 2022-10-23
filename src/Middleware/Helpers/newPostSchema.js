import joi from "joi";

const newPostSchema = joi.object({
  url: joi.string().uri().required(),
  comment: joi.string(),
});

export { newPostSchema };
