import { Router } from "express";
import {
  createNewOwner,
  getOwners,
  getOwnerByParam,
  deleteOwner,
  editOwner,
} from "../controller/owner.controller.js";

const ownerRouter = Router();

ownerRouter.get("/getOwners", getOwners);
ownerRouter.get("/getOwners/:id", getOwnerByParam);
ownerRouter.post("/newOwner", createNewOwner);
ownerRouter.delete("/deleteOwner/:id", deleteOwner);
ownerRouter.put("/editOwner", editOwner);

export { ownerRouter };
