import { getAllPetsService, getPetByID, createPet, updatePet, deletePet } from "../service/pet.service.js";
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const getAllPets = async (req, res) => {
  try {
    const pets = await prisma.pet.findMany()
    res.json(pets)
  } catch (error) {
    console.error("Erro no serviço de getPet", error);
  }
};

const getPetByParam = async (req, res) => {
  try {
    const { petID } = req.params
    const selectedPet = await prisma.pet.findUnique({
      where: {
        id: petID
      }
    })
    res.status(200).json(selectedPet)
  } catch (error) {
    console.error("Erro no controller getPetsByParam", error);
    res.status(404).json('sem pets com esse id')
  }
};

const createNewPet = async (req, res) => {
  try {
    const { name, age, species, ownerID } = req.body
    const createdPet = await prisma.pet.create({
      data: {
        name, 
        age,
        species,
        ownerID
      }
    })
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
    await updatePet(editedPet)
    res.status(201).json({ editedPet })
  } catch (error) {
    console.log('erro no controller updatePet', error)
  }
}


export { getAllPets, getPetByParam, createNewPet, editPetByBody, deletePetByParam};
