import { Router } from 'express'
import {
  getPets,
  findPetById,
  createNewPet,
  editPet,
  adoptPet,
  deletePet,
  findAdoptedPets
} from '../controller/pet.controller.js'

const petRouter = Router()

petRouter.get('/pets', getPets)
petRouter.get('/pet/:id', findPetById)
petRouter.post('/pet/new', createNewPet)
petRouter.delete('/pet/delete/:id', deletePet)
petRouter.put('/pet/edit/:id', editPet)
petRouter.get('/pet/adopted', findAdoptedPets)
petRouter.put('/adopt', adoptPet)

export { petRouter }
