import express from "express";
const router = express.Router(); // router() function inside the express
import EmpController from "../Controller/EmpConroller.js";
router.post("/addemployees", EmpController.RegisterID); //post the data in employee collection
router.get("/getemployees", EmpController.getEmployees);
router.post("/getemployee", EmpController.getEmployee); //get single employee data 
router.get("/getemployee/:email",EmpController.getEmployeeWithEmail)
export default router;
