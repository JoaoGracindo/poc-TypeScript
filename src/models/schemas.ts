import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().required(),
    author: Joi.string().required(),
})

export default schema;