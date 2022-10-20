const STATUS_CODE = Object.freeze({
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    TIMEOUT_ERROR: 403,
    SERVER_ERROR: 500
});

const STATUS_TEXT = Object.freeze({
    OK: 'Ok',
    CREATED: 'Created',
    BAD_REQUEST: 'Bad Request',
    TIMEOUT_ERROR: 'Session Expired',
    NOT_FOUND: 'Not Found',
});

function okResponse(res, text = STATUS_TEXT.OK) {
    return res.status(STATUS_CODE.OK).send(text);
}

function createdResponse(res, text = STATUS_TEXT.CREATED) {
    return res.status(STATUS_CODE.CREATED).send(text);
}

function badRequestResponse(res, text = STATUS_TEXT.BAD_REQUEST) {
    return res.status(STATUS_CODE.BAD_REQUEST).send(text);
}

function notFoundResponse(res, text = STATUS_TEXT.NOT_FOUND) {
    return res.status(STATUS_CODE.NOT_FOUND).send(text);
}

function serverErrorResponse(res, error) {
    console.error(error);
    if (error.name === 'TokenExpiredError') return res.status(STATUS_CODE.TIMEOUT_ERROR).send(STATUS_TEXT.TIMEOUT_ERROR);
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
}

export {
    okResponse,
    createdResponse,
    badRequestResponse,
    notFoundResponse,
    serverErrorResponse
}