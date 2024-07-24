  import { Router } from "express";
  import { getAllPets, getPetByParam } from "../controller/pet.controller.js";
  const petRouter = Router()

  petRouter.get("/getAllPets", getAllPets)
  petRouter.get("/getPet/:id", getPetByParam) 
  // petRouter.post("/sendPet", sendPet) //body
  // petRouter.delete("/deletePet/:id", deletePet) //param
  // petRouter.put("/editPet", editPet) //body

  export { petRouter }