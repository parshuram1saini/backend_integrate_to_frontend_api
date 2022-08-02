import Joi from "joi"
const joiValidation = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.number().max(999999).min(100000).required(),
    role:Joi.string().required()
})
export default joiValidation;