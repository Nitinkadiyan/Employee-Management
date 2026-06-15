const Employee = require("../models/Employee");
const createEmployee = async (req, res) => {
  try {
    const employee = await Employee.create(req.body);
    res.status(201).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getEmployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(201).json({
      success: true,
      count: employees.length,
      data: employees,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Not this employee exists",
      });
    }
    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found",
      });
    }
    res.status(200).json({
      success: true,
      data: employee,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
const deleteEmployee = async(req,res)=>{
    try{
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if(!employee){
            return res.status(404).json({
                success:false,
                message:"Employee Not Found",
            })

        }
        res.status(200).json({
            success:true,
            message:"Employee Deleted Successfully",
        })

    }
    catch(error){
        res.status(500).json({
            success:false,
        message:error.message,
        })
    }
}
module.exports = { createEmployee, getEmployee, getEmployeeById,updateEmployee,deleteEmployee };
