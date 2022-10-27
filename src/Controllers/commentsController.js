import { getCountComment } from '../Repositories/CommentRepository.js';

import * as responseFunctions from './Helpers/controllerHelpers.js'


async function commentsPost(req, res) {
    
    try {
        const countComments = await getCountComment();
        
        return responseFunctions.okResponse(res, countComments.rows);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
    
}

export { commentsPost }