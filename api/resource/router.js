// build your `/api/resources` router here
const express = require("express")
const resources = require("./model")

const router = express.Router()

router.post("/", async (req, res, next) => {
	try {
		const resource = await resources.addResource(req.body)
		res.status(201).json(resource)
	} catch(err) {
		next(err)
	}
})

router.get("/", async (req, res, next) => {
	try {
        const resource = await resources.getResources()
        res.status(200).json(resource)
	} catch(err) {
		next(err)
	}
})

module.exports = router 