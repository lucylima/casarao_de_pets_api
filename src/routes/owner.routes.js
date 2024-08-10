import { Router } from 'express'
import {
  createOwner,
  getOwners,
  findOwnerByCpf,
  deleteOwner,
  editOwner
} from '../controller/owner.controller.js'

const ownerRouter = Router()

ownerRouter.get('/owners', getOwners)
ownerRouter.get('/owner/:cpf', findOwnerByCpf)
ownerRouter.post('/owner/new', createOwner)
ownerRouter.delete('/owner/delete/:id', deleteOwner)
ownerRouter.put('/owner/edit/:id', editOwner)

export { ownerRouter }
