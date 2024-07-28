import { Router } from "express"
import { createNewOwner, getOwners } from "../controller/owner.controller.js"

const ownerRouter = Router()

ownerRouter.get("/getOwners", getOwners)
ownerRouter.post("/newOwner", createNewOwner)

export { ownerRouter }