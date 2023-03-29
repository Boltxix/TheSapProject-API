import express from "express"
import { editStudent } from "../controller/student.js"

const router = express.Router()

router.put("/student/:id", editStudent)

export default router