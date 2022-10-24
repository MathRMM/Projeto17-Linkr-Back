import * as DB_likes from '../Repositories/likesRepository.js';
import * as responseFunctions from './Helpers/controllerHelpers.js';

async function getLikesController(req, res){
    const postId = req.params.id
    const userId = res.locals?.userId
    
    try {
        const userLike = await DB_likes.getUserLike(userId, postId)
        const likesArray = await DB_likes.getLikes(postId)
        if(!likesArray[0]) return responseFunctions.notFoundResponse(res)
        if(userLike[0]){
            const likesFilter = likesArray.filter(e => e.userId !== userLike[0].userId)
            return responseFunctions.okResponse(res, {
                userLike: true,
                countLikes: likesArray[0]?.countLikes,
                postId:likesArray[0]?.postId,
                likes : likesFilter
            })
        }
        return responseFunctions.okResponse(res, {
            userLike: false,
            countLikes: likesArray[0]?.countLikes,
            postId:likesArray[0]?.postId,
            likes : likesArray
        });
    } catch (error) {
        console.error(500)
        return responseFunctions.serverErrorResponse(res, error)
    }
}

async function postLikeController(req, res){
    const { postId } = req.body
    const userId = res.locals?.userId

    try {
        const delsert = await DB_likes.delsertLikes(userId, postId)
        if(delsert.command === 'INSERT'){
            return responseFunctions.createdResponse(res, {message: 'LIKE'})
        }
        if(delsert.command === 'DELETE'){
            return responseFunctions.createdResponse(res, {message: 'UNLIKE'})
        }
    } catch (error) {
        console.error(error)
        return responseFunctions.serverErrorResponse(res, error)
    }
}

export {
    getLikesController,
    postLikeController
}