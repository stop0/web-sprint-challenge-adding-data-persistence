// build your `/api/projects` router here
const express = require("express")
const project = require("./model")

const router = express.Router()

router.post("/", async (req, res, next) => {
	try {
		const projects = await project.addProject(req.body)
		res.status(201).json(projects)
	} catch(err) {
		next(err)
	}
})

router.get("/", async (req, res, next) => {
	try {
        const projects = await project.getProject()
        res.status(200).json(projects)
	} catch(err) {
		next(err)
	}
})
module.exports = router; 