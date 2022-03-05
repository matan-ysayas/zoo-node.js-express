const animalRoute=require('express').Router();
const animalController=require('../controllers/animal-controller');

animalRoute.get('/',animalController.getAnimals);
animalRoute.get('/:id',animalController.getAnimalById);
animalRoute.post('/',animalController.addAnimal);
animalRoute.put('/:id',animalController.updateAnimal);
animalRoute.delete('/:id',animalController.deleteAnimal);

module.exports=animalRoute;
