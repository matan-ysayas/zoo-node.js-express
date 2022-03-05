const employeeRouter=require('express').Router();
const employeeController=require('../controllers/employee-controller');


employeeRouter.get('/',employeeController.getEmployees);
employeeRouter.get('/:id',employeeController.getEmployeeById);
employeeRouter.post('/',employeeController.addEmployee);
employeeRouter.put('/:id',employeeController.updateEmployee);
employeeRouter.delete('/:id',employeeController.deleteEmployee);

module.exports=employeeRouter;
