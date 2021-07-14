const { Router } = require("express");
const { check, validationResult } = require("express-validator");
const Email = require("../models/Email");
const router = Router();

//  /api/subscribe/mail
router.post(
  "/mail",
  [check("email", "Incorrect email").isEmail()],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Provide correct email",
        });
      }
      const { email } = req.body;
      console.log("Data: ", req.body);
      const letter = await Email.findOne({ email });
      if (letter) {
        res.status(400).json({ message: "Ooops, you are already subscribed" });
      }

      const mail = new Email({
        email,
      });

      await mail.save();

      res.status(201).json({ message: "You are subscribed" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "The problem has occured, please, try again." });
    }
  }
);
module.exports = router;
