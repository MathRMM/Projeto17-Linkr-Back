import { getUserById } from '../Repositories/usersRepositories.js'

async function getUserByIdController(req, res){
    const {id} = req.params
    console.log(id)

    try {
        const user = await getUserById(id)
        return res.status(200).send(user)
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export {
    getUserByIdController
}