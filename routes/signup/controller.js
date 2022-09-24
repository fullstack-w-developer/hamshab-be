import controller from "./../controller.js";
import bcrypt from "bcrypt";
import _ from "lodash";
import jwt from "jsonwebtoken";

export default new (class extends controller {
  async signup(req, res) {
    let checkEmail = await this.user.findOne({
      email: req.body.email,
    });

    if (checkEmail) {
      return this.response({
        res,
        code: 400,
        message: "ایمیل  قبلا ثبت شده است",
      });
    }
    let checkUsername = await this.user.findOne({
      username: req.body.username,
    });

    if (checkUsername) {
      return this.response({
        res,
        code: 400,
        message: "نام کاربری  قبلا ثبت شده است",
      });
    }

    const { username, password, email } = req.body;

    const user = await this.user({
      username,
      password,
      email,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();

    const token = jwt.sign(
      _.pick(user, ["_id"]),
      process.env.JWT_KEY
    );

    this.response({
      res,
      data: {
        user: _.pick(user, [
          "_id",
          "username",
          "email",
          "timeline",
          "profile",
          "backgroundImage",
          "bio",
          "music",
          "isAdmin",
        ]),
        token,
      },
      message: "کاربر با موفقیت ثبت شد",
    });
  }
})();
