var dashboardModel = require("../models/dashboardModel");

function post(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu nom está indefinido")
    } else {

        dashboardModel.post(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de post! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function curtida(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else {

        dashboardModel.curtida(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de curtida! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function comentario(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu nome está indefinido")
    } else {

        dashboardModel.comentario(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function listarPost(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else {

        dashboardModel.listarPost(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function listarCurtida(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else {

        dashboardModel.listarCurtida(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function listarComentario(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else {

        dashboardModel.listarComentario(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de comentario! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}

function dash(req, res) {

    var idUsuario = req.params.id

    if (idUsuario == undefined) {
        res.status(400).sendo("Seu idUsuario está indefinido")
    } else {

        dashboardModel.dash(idUsuario)

            .then(
                function (resultado) {
                    res.json(resultado)
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar a lista de interações! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }
}


module.exports = {
    post,
    curtida,
    comentario,
    listarPost,
    listarCurtida,
    listarComentario,
    dash
}