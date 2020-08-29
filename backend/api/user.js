const { response, request } = require("express")

module.exports = app => {
    const save = (request, response) => {
        response.send('user save')
    }
    return { save }
}