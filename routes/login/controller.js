import controller from "../controller.js";
import bcrypt from "bcrypt";
import _ from "lodash";
import jwt from "jsonwebtoken";

export default new (class extends controller {
  async login(req, res) {
    let user = await this.user.findOne({
      username: req.body.username,
    });

    if (!user) {
      return this.response({
        res,
        code: 400,
        message: "نام کاربری یا رمز عبور اشتباه هست",
      });
    }

    const checkpassword = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!checkpassword) {
      return this.response({
        res,
        code: 400,
        message: "نام کاربری یا رمز عبور اشتباه هست",
      });
    }

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
          "imageBackground",
          "bio",
          "music",
          "isAdmin"
        ]),
        token,
      },
      message: "کاربر با موفقیت وارد شد",
    });
  }
})();
