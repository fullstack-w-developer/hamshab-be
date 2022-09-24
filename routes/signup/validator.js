import expressValidator from "express-validator";

const check = expressValidator.check;

export default new (class {
  validatorSignup() {
    return [
      check("username")
        .notEmpty()
        .isString()
        .withMessage("username is required"),
      check("password")
        .notEmpty()
        .isString()
        .withMessage("password is required"),
      check("email")
        .notEmpty()
        .isEmail()
        .withMessage("email validation is required"),
    ];
  }
})();
