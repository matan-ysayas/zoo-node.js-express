const employees = require("../models/employee-model");

const getEmployees = async (req, res) => {
  await employees
    .find()
    .then(employees => {
      res.status(200).json(employees);
    })
    .catch((err) => {
      res.status(500).json({
        massage: "failed to get Employee",
        error: err,
      });
    });
};

const getEmployeeById = async (req, res) => {
  await employees
    .findById(req.params.id)
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to get Employee", error: err });
    });
};
const addEmployee = async (req, res) => {
  await employees
    .create(req.body)
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to add Employee", error: err });
    });
};
const updateEmployee = async (req, res) => {
  await employees
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to update Employee", error: err });
    });
};
const deleteEmployee = async (req, res) => {
  employees
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "Employee delete" });
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to delete Employee", error: err });
    });
};

module.exports = {getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee};