import { getUserById, searchUsername } from '../Repositories/usersRepositories.js'
import * as responseFunctions from './Helpers/controllerHelpers.js'

async function getUserByIdController(req, res){
    const {id} = req.params
    if(!id || !Number(id)) return responseFunctions.badRequestResponse(res)
    let { page } = req.query
    if(!page || page == 0) page = 1

    try {
        const user = await getUserById(id, page)
        if(!user[0]) return responseFunctions.notFoundResponse(res)
        const objUser = {
            userId: user[0].userId,
            username: user[0].username,
            userPicUrl: user[0].userPicUrl,
            posts:user.map(e => {return {
                postId: e.postId,
                postLink: e.postLink,
                postText: e.postText,
                metaTitle: e.metaTitle,
                metaImage: e.metaImage,
                metaDescription: e.metaDescription
            }})
        }
        return responseFunctions.okResponse(res, objUser);
    } catch (error) {return responseFunctions.serverErrorResponse(res, error)}
}

async function searchUsernameController(req, res){
    const {username} = req.params

    try {
        const users = await searchUsername(username);
        if(!users[0]) return responseFunctions.notFoundResponse(res)
        return responseFunctions.okResponse(res, users);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
}

export {
    getUserByIdController,
    searchUsernameController
}