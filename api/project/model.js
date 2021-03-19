// build your `Project` model here
const db = require("../../data/dbConfig");

async function getProjects ()  {
    const allProjects = await db('projects')
    .select(
        "project_name",
        "project_description",
        "project_completed",
        )
return allProjects.map(project => {
    if (project.project_completed === 1) {
        project.project_completed = true
    } else {
        project.project_completed = false
    }
    return allProjects
})



}

const boolean = (num) => {
    if (num === true || num === 1 || num === "1") {
        return true
    } else {
        return false
    }
}



async function addProject(project){
    const [id] = await db('projects')
    .insert({
        project_name: project.project_name,
        project_description: project.task_description,
        project_completed: boolean(project.task_completed)
    })

let projects = await db('projects')
    .select('*')
    .where("project_id", id)
    .first()

return {
    ...projects,
    project_completed: boolean(project.project_completed)
}
}

module.exports = {
    getProjects,
    addProject,
} 