import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getPets = async (req, res) => {
  try {
    const pets = await prisma.pets.findMany()
    return res.status(200).json({ pets })
  } catch (error) {
    res.status(400).json({ error })
  }
}

const findPetById = async (req, res) => {
  try {
    const { id } = req.params
    const pet = await prisma.pets.findUnique({
      where: { id }
    })
    if (pet) {
      return res.status(200).json({ pet })
    } else {
      return res.status(404).json({ error: '404 not found' })
    }
  } catch (error) {
    return res.status(404).json({ error })
  }
}

const createNewPet = async (req, res) => {
  try {
    const { name, age, species, kennel } = req.body
    const createdPet = await prisma.pets.create({
      data: {
        name,
        age,
        species,
        kennel_id: kennel
      }
    })
    return res.status(201).json({ createdPet })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const deletePet = async (req, res) => {
  try {
    const { id } = req.params
    const deletedPet = await prisma.pets.delete({
      where: { id }
    })
    return res.status(200).json({ deletedPet })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const editPet = async (req, res) => {
  try {
    const { id } = req.params
    const { name, age, species, kennel } = req.body
    const editedPet = await prisma.pets.update({
      where: { id },
      data: {
        name,
        age,
        species,
        kennel_id: kennel
      }
    })
    return res.status(200).json({ editedPet })
  } catch (error) {
    return res.status(400).json({ error })
  }
}

const findAdoptedPets = async (req, res) => {}

const adoptPet = async (req, res) => {
  try {
    const { id, ownerID } = req.body
    const result = await prisma.pet.update({
      where: {
        id: id
      },
      data: {
        owner_id: ownerID,
        adoptedStatus: true
      }
    })
    res.status(200).json(result)
  } catch (error) {
    res.status(500).json({ error })
  }
}

export {
  getPets,
  findPetById,
  createNewPet,
  editPet,
  deletePet,
  adoptPet
}
