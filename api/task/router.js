const express = require("express")
const task = require("./model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
        const tasks = await task.getTasks()
        res.status(200).json(tasks)
	} 
    catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
	const tasks = await task.newTask(req.body)
		res.status(201).json(tasks)
	} 
    
    catch(err) {
		next(err)
	}
})

module.exports = router 