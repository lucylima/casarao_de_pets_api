import { Router } from "express";
import {
  getAllPets,
  getPetByParam,
  createNewPet,
  deletePetByParam,
  editPetByBody,
} from "../controller/pet.controller.js";

const petRouter = Router();

petRouter.get("/getPet", getAllPets);
petRouter.get("/getPet/:id", getPetByParam);
petRouter.post("/sendPet", createNewPet); //body
petRouter.delete("/deletePet/:id", deletePetByParam); //param
petRouter.put("/editPet", editPetByBody); //body

export { petRouter };
