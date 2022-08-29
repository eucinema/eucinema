const { SequelizeScopeError } = require('sequelize');
const Sequelize = require('sequelize')
const sequelize = new Sequelize('eucinema', 'root', '', {
    host: "localhost",
    dialect: 'mysql'
});

sequelize.authenticate().then(() => {
    console.log("Connected to database successfully.");
}).catch((error) => {
    console.log("Fail at connecting to the database.")
});

const Artigo = sequelize.define('artigo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    login: {
        type: Sequelize.STRING 
        // Chave estrangeira de Usuário
    },

    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    },

    categoria: {
        type: Sequelize.STRING
    }
})

const Usuario = sequelize.define('usuario', {
    login: {
        type: Sequelize.STRING,
        primaryKey: true
    }, 

    nome: {
        type: Sequelize.STRING
    },

    senha: {
        type: Sequelize.STRING
    }
})

const LikesDados = sequelize.define('likesdados', {
    login: {
        type: Sequelize.STRING,
        primaryKey: true
    },

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
})

const ArtigosSalvos = sequelize.define('artigosSalvos', {
    login: {
        type: Sequelize.STRING,
        primaryKey: true
    },

    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
})



/* Recria as tabelas do banco de dados, não use se estiver se conectando ao banco com os dados já existentes
*/
ArtigosSalvos.sync({force: true})
LikesDados.sync({force: true})
Usuario.sync({force: true})
Artigo.sync({force: true})

