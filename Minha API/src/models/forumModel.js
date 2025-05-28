var database = require("../database/config");

function listar() {
    var instrucao = `SELECT * FROM arquivos;`

    return database.executar(instrucao);
}

function enviarPdf(idUsuario, descricao, pdf) {
    var instrucaoSql = `INSERT INTO arquivos (quem_postou, nome, extencao) VALUES
(${idUsuario}, "${descricao}", "${pdf}");`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    listar,
    enviarPdf
}