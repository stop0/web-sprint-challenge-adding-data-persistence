// build your `Resource` model here
const db = require("../../data/dbConfig")

const getResources = () => {
	return db("resources")
	.select("*")	
}

const addResource = async (resource) => {
    const [id] = await db("resources")
        .insert({
            resource_name: resource.resource_name,
            resource_description: resource.resource_description,
        })
    return db("resources")
    .select('*')
    .where("resource_id", id)
    .first()		
}

module.exports = {
    getResources,
	addResource,
} 