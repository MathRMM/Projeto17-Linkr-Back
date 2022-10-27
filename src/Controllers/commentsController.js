import { getCountComment, getCommentsPostByidPost, newCommentPostByidPost } from '../Repositories/CommentRepository.js';
import { getUserIdByToken, getPostByIdPost } from '../Repositories/updAndDelRepository.js';
import * as responseFunctions from './Helpers/controllerHelpers.js'


async function countCommentsPost(req, res) {
    
    try {
        const countComments = await getCountComment();
        
        return responseFunctions.okResponse(res, countComments.rows);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
    
}

async function commentsPost(req, res) {
    const id = req.params.id;
    try {
        const comments = await getCommentsPostByidPost(id);
        
        return responseFunctions.okResponse(res, comments.rows);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
    
}

async function newCommentOnPost(req, res) {
    const token = req.headers.authorization?.replace('Bearer ', '');
    const id = req.params.id;
    const {commentary} = req.body;
    try {
        const idUser = await getUserIdByToken(token);
        if(!idUser.rows[0].idUser) return responseFunctions.unauthorized(res);
        const idAuthorComm = idUser.rows[0].idUser; 

        const post = await getPostByIdPost(id)
        if (!post.rows[0]) return responseFunctions.notFoundResponse(res);
        let isPostAuthor = false
        if(post.rows[0].idUser === idAuthorComm) {
            isPostAuthor = true
        }
        
        await newCommentPostByidPost(idAuthorComm, id, commentary, isPostAuthor);
        
        return responseFunctions.okResponse(res);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
}



export { countCommentsPost, commentsPost, newCommentOnPost }