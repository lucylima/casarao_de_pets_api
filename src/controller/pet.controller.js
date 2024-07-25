import { getAllPetsService, getPetByID, createPet, updatePet, deletePet } from "../service/pet.service.js";
import { Pet } from "../model/Pet.model.js"

const getAllPets = async (req, res) => {
  try {
    const getPets = await getAllPetsService();
    res.status(200).json(getPets);
  } catch (error) {
    console.error("Erro no serviço de getPet", error);
  }
};

const getPetByParam = async (req, res) => {
  try {
    const petID = req.params.id;
    const pet = await getPetByID(petID);
    res.status(200).json({ pet });
  } catch (error) {
    console.error("Erro no controller getPetsByParam", error);
    res.status(404).json('sem pets com esse id')
  }
};

const createNewPet = async (req, res) => {
  try {
    const { name, age, species } = req.body
    const newPet = new Pet(name, age, species)
    await createPet(newPet)
    res.status(201).json({ newPet })
  } catch (error) {
    console.error('erro no controller createNewPet', error)
  }
}


const deletePetByParam = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPet = await deletePet(id)
    res.status(200).json({ deletedPet })
  } catch (error) {
    console.error('erro no controller deletePetByParam', error)
  }
}

const editPetByBody = async (req, res) => {
  try {
    const { id, name, age, species } = req.body
    const editedPet = { id, name, age, species }
    const response = await updatePet(editedPet)
    res.status(201).json({ editedPet })
  } catch (error) {
    console.log('erro no controller updatePet', error)
  }
}


export { getAllPets, getPetByParam, createNewPet, editPetByBody, deletePetByParam};
