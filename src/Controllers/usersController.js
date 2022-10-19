import { getUserById } from '../Repositories/usersRepositories.js'

async function getUserByIdController(req, res){
    const {id} = req.params
    console.log(id)

    try {
        const user = await getUserById(id)
        const objUser = {
            userId: user[0].userId,
            username: user[0].username,
            userPicUrl: user[0].userPicUrl,
            posts:user.map(e => {return {
                postId: e.postId,
                postLink: e.postLink,
                postText: e.postText
            }})
        }
        return res.status(200).send(objUser)
    } catch (error) {
        console.error(error)
        return res.sendStatus(500)
    }
}

export {
    getUserByIdController
}