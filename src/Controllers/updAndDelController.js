import { getUserIdByToken, getPostByIdPost, deletePostByIdPost } from '../Repositories/updAndDelRepository.js'
import * as responseFunctions from './Helpers/controllerHelpers.js'


async function deletePost(req, res) {
    const id = req.params.id;
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    try {
        const idUser = await getUserIdByToken(token);
        if(!idUser.rows[0].idUser) return responseFunctions.unauthorized(res);
        const post = await getPostByIdPost(id)
        if (!post.rows[0]) return responseFunctions.notFoundResponse(res);
        
        if(post.rows[0].idUser !==idUser.rows[0].idUser) return responseFunctions.unauthorized(res);
        await deletePostByIdPost(id)
        
        return responseFunctions.noContentResponse(res);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
    
}

export {deletePost}
