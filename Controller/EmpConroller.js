import EmpModal from "../Model/EmpModal.js";
import joiValidation from "../validation/Validation.js";
class EmpController {
  static RegisterID = async (req, res) => {
    // console.log(req.body);
    let info = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    };
    console.log(info);
    const { error } = joiValidation.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "false",
        message: error.message,
      });
    } else {
      try {
        const emp = await EmpModal.create(req.body);
        res.status(201).json({
          status: 1,
          message: "successful registrated",
        });
        // console.log(emp);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };
  static getEmployees = async (req, res) => {
    const user = await EmpModal.find({});
    if (user) {
      return res.status(201).json({
        status: 1,
        message: user,
      });
    } else return res.status(404).send({ message: "data is not found" });
  };
  static getEmployee = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!(email && password)) {
        res
          .status(400)
          .json({ status: 0, message: "Email & Password are mandatory" });
      } else if (email && password) {
        const user = await EmpModal.findOne({ email: email });
        console.log(user);
        if (user) {
          if (password * 1 === user.password) {
            res.status(200).json({
              status: true,
              message: "You Logged Successfully ",
              data: user,
            });
          } else {
            res
              .status(404)
              .json({ status: false, message: "Password doesn't match" });
          }
        } else {
          return res.status(404).json({
            status: false,
            message: "Email-id isn't exists, Try with another Email",
          });
        }
      }
    } catch (error) {
      res.status(400).send({ message: "something is not found" });
    }
  };
  static getEmployeeWithEmail = async (req, res) => {
    try {
      let email = req.params.email;
      console.log(email)
      if (email) {
        let user = await EmpModal.findOne({ email: email });
        if (!user) {
          return res.status(404).json({
            status: false,
            message: "email-id is not exists ",
          });
        } else {
          res.status(200).json({
            status: true,
            message: user,
          });
        }
      } else {
        res.status(404).json({
          status: false,
          message: "add the email params ",
        });
      }
    } catch (error) {
      res.status(404).json({
        status: false,
        message: error,
      });
    }
  };
}
export default EmpController;
