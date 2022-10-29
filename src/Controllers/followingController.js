import { getFollowingsByidUser } from '../Repositories/followingRepository.js';
import * as responseFunctions from './Helpers/controllerHelpers.js'

async function followingUser(req, res) {
    const id = req.params.id;
    try {
        const comments = await getFollowingsByidUser(id);
        
        return responseFunctions.okResponse(res, comments.rows);
    } catch (error) {
        return responseFunctions.serverErrorResponse(res, error)
    }
}

export { followingUser}
