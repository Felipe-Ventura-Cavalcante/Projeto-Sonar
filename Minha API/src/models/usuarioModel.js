var database = require("../database/config")

// Crio uma instrução para o MySql inserir um novo usuário
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha)

    // comando para inserção dos dados no banco de dados
    var instrucaoSql = `
    INSERT INTO usuario (nome, email, senha, descricao, imagem_perfil) VALUES
    ('${nome}', '${email}', '${senha}', '...', 'perfil_anonimo.jpeg')`


    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

function listarNome() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarNome():")

    var instrucaoSql = `
    SELECT nome FROM usuario;`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql);
}

// Crio uma instrução para o MySql verificar os dados de login
function logar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)


    // comando para verificar informações do banco de dados
    var instrucaoSql = `
    SELECT * FROM usuario WHERE email = "${email}" AND senha = "${senha}";`

    console.log("Executando a instrução SQL: \n" + instrucaoSql)
    return database.executar(instrucaoSql)
}

module.exports = {
    cadastrar,
    listarNome,
    logar
}