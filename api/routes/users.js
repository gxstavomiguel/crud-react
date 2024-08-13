import express from "express"
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsers)

router.post("/", addUser)

router.put("/", updateUser)

router.delete("/", deleteUser)

export default router;