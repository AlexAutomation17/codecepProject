import Joi from "joi";

export const employeeSchema = Joi.object({
    partitionKey: Joi.string().required(),
    sortKey: Joi.string().required(),
    username: Joi.string().required(),
    id: Joi.string().required(),
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    dependants: Joi.number().required(),
    expiration: Joi.string().required(),
    salary: Joi.number().positive().required(),
    gross: Joi.number().positive().required(),
    benefitsCost: Joi.number().positive().required(),
    net: Joi.number().positive().required(),
});

export const employeesSchema = Joi.array().items(employeeSchema);