  import { Router } from "express";
  import { getAllPets, getPetByParam, createNewPet, deletePetByParam } from "../controller/pet.controller.js";
  
  const petRouter = Router()

  petRouter.get("/getAllPets", getAllPets)
  petRouter.get("/getPet/:id", getPetByParam) 
  petRouter.post("/sendPet", createNewPet) //body
  petRouter.delete("/deletePet/:id", deletePetByParam) //param
  petRouter.put("/editPet", editPet) //body

  export { petRouter }