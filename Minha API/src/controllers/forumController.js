var forumModel = require('../models/forumModel');

function listar(req, res) {

  forumModel.listar()

    .then(

      resultado => {
        res.status(200).json(resultado)
      }
    ).catch(
      function (erro) {
        console.log(erro)
        console.log(
          "\nHouve um erro ao realizar a busca de arquivos pdf! Erro: ",
          erro.sqlMessage
        )
        res.status(500).json(erro.sqlMessage)
      }
    )
}

function enviarPdf(req, res) {

  var pdf = req.file.filename
  var idUsuario = req.body.idUsuarioServer
  var descricao = req.body.descricaoServer

  if (idUsuario == undefined) {
    res.status(400).send("Seu idUsuario está indefinido")
  } else if (pdf == undefined) {
    res.status(400).send("Seu pdf está indefinido")
  } else if (descricao == undefined) {
    res.status(400).send("Sua descricao está indefinido")
  } else {

    forumModel.enviarPdf(idUsuario, descricao, pdf)
      .then(resultado => {
        res.status(201).send("arquivo enviado com sucesso");
      }).catch(err => {
        res.status(500).send(err);
      });
  }
}

module.exports = {
  listar,
  enviarPdf
}