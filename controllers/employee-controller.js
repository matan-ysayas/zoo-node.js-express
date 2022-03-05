const employees = require("../models/employee-model");

const getEmployees = async (req, res) => {
  await animals
    .find()
    .then(animals => {
      res.status(200).json(animals);
    })
    .catch((err) => {
      res.status(500).json({
        massage: "failed to get animals",
        error: err,
      });
    });
};

const getEmployeeById = async (req, res) => {
  await animals
    .findById(req.params.id)
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to get animal", error: err });
    });
};
const addEmployee = async (req, res) => {
  await animals
    .create(req.body)
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to add animal", error: err });
    });
};
const updateEmployee = async (req, res) => {
  await animals
    .findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(animal => {
      res.status(200).json(animal);
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to update animal", error: err });
    });
};
const deleteEmployee = async (req, res) => {
  animals
    .findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: "student deleted" });
    })
    .catch((err) => {
      res.status(500).json({ message: "failed to delete animal", error: err });
    });
};

module.exports = {getEmployees,getEmployeeById,addEmployee,updateEmployee,deleteEmployee};