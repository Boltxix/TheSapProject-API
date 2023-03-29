import express from "express"

import {  deleteStudent, editUser, getUser } from "../controller/admin.js"

const router = express.Router()

router.get("/students", getUser)
router.put("/students/:id", editUser)
router.delete("/students/:id", deleteStudent)

export default router