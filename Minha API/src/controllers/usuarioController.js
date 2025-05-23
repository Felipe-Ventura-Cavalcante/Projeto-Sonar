// eu chamo as informações da model
var usuarioModel = require("../models/usuarioModel")

function cadastrar(req, res) {

    // criação das variáveis que irão captar os valores das inputs do cadastro.html
    var nome = req.body.nomeServer
    var email = req.body.emailServer
    var senha = req.body.senhaServer

    if (nome == undefined) {
        res.status(400).sendo("Seu nom está indefinido")
    } else if (email == undefined) {
        res.status(400).send("Seu email está indefinido")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinda")
    }

    usuarioModel.cadastrar(nome, email, senha)
        .then(
            function (resultado) {
                res.json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function listarNome(req, res) {

    usuarioModel.listarNome()
        // se a busca por esses dados der tudo certo
        .then(

            resultado => {
                res.status(200).json(resultado)
            }
        ).catch(
            function (erro) {
                console.log(erro)
                console.log(
                    "\nHouve um erro ao realizar a busca de dados dos Posts! Erro: ",
                    erro.sqlMessage
                )
                res.status(500).json(erro.sqlMessage)
            }
        )
}

function logar(req, res) {

    // Criação das variáveis que irão captar os dados das inputs do login.html
    var email = req.body.emailServer
    var senha = req.body.senhaServer

    // Caso os campos estejam vazios
    if (email == undefined) {
        res.status(400).send("Seu email está indefinido")
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinda")
    }

    // caso esteja tudo certo
    else {
        usuarioModel.logar(email, senha)

            // é feito uma promessa onde é criado o 'resultado =>'
            // esse resultado recebe todos os valores retornados pelo select da função login (diUsuario, nome, email, senha)
            // esses valores vem em um array[] com varios objetos, ex: idUsuario:
            .then((resultado) => {
                if (resultado.length > 0) {
                    res.json({
                        idUsuario: resultado[0].idUsuario,
                        email: resultado[0].email,
                        nome: resultado[0].nome,
                        senha: resultado[0].senha,
                        descricao: resultado[0].descricao,
                        imagem_perfil: resultado[0].imagem_perfil
                    })
                } else {
                    res.status(403).send("Email e/ou senhas inválidos")
                }
            }
            ).catch(
                function (erro) {
                    console.log(erro)
                    console.log(
                        "\nHouve um erro ao realizar o login! Erro: ",
                        erro.sqlMessage
                    )
                    res.status(500).json(erro.sqlMessage)
                }
            )
    }

}


module.exports = {
    cadastrar,
    listarNome,
    logar
}