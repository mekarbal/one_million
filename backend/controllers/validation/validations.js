const Joi = require("joi");

const adminValidations = (data) => {
  const AdminValidation = Joi.object({
    full_name: Joi.string().min(4).required(),
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
  });
  return AdminValidation.validate(data);
};

const LoginValidations = (data) => {
  const adminLoginValidation = Joi.object({
    phone: Joi.string().min(10).required(),
    password: Joi.string().min(6).required(),
  });
  return adminLoginValidation.validate(data);
};

exports.adminValidations = adminValidations;
exports.LoginValidations = LoginValidations;
