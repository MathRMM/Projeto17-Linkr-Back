import { getAllFollowing, getFollowing, insertFollowing, deleteFollowing } from "../repositories/followRepository.js";

import * as response from "./Helpers/controllerHelpers.js";

export async function returnFollowing(req, res) {
    const { userId } = res.locals;

    try {
        const { rows: following } = await getAllFollowing(userId);

        response.okResponse(res, following);
        return;
    } catch (error) {
        console.log(error);
        response.serverErrorResponse(res, error);
        return;
    }
}

export async function returnIsFollowing(req, res) {
    const id = parseInt(req.params.id);
    const { userId } = res.locals;


    try {
        const { rows: following } = await getFollowing(userId, id);

        if (following.length > 0) {
            response.okResponse(res, { following: true });
            return;
        } else {
            response.okResponse(res, { following: false });
            return;
        }
    } catch (error) {
        console.log(error);
        response.serverErrorResponse(res, error);
        return;
    }
}

export async function addFollow(req, res) {
    const id = parseInt(req.params.id);
    const { userId } = res.locals;

    if (id === userId) {
        response.badRequestResponse(res, { message: "User cannot follow it's own account" })
        return;
    }

    try {
        const query = await insertFollowing(userId, id);
        if (query?.command === 'INSERT' && query?.rowCount === 1) {
            response.okResponse(res);
            return;
        } else {
            response.badRequestResponse(res, { message: "Already following" });
            return;
        }

    } catch (error) {
        console.log(error);
        response.serverErrorResponse(res, error);
        return;
    }
}

export async function removeFollow(req, res) {
    const id = parseInt(req.params.id);
    const { userId } = res.locals;
    if (id === userId) {
        response.badRequestResponse(res, { message: "User not valid" })
        return;
    }


    try {
        const query = await deleteFollowing(userId, id);
        if (query?.command === 'DELETE' && query?.rowCount === 1) {
            response.okResponse(res);
            return;
        } else {
            response.badRequestResponse(res, { message: "Already not following" });
            return;
        }
    } catch (error) {
        console.log(error);
        response.serverErrorResponse(res, error);
        return;
    }
}