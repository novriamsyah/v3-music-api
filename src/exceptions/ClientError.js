/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable padded-blocks */
/* eslint-disable eol-last */
class ClientError extends Error {

    constructor(message, statusCode = 400) {
        super(message);
        this.statusCode = statusCode;
        this.name = 'ClientError';
    }

}

module.exports = ClientError;