const Sequelize=require('sequelize');
const database=require('./db');

const Pessoas=database.define('pessoas',{ id:{
    type:Sequelize.INTEGER,
    autolncrement:true,
    allowNull:false,
    primary:true
}
nome:{
    type:Sequelize.STRING,
    allowNull:false
}
idade:{
    type:Sequelize.DOUBLE
},
descricao:Sequelize.STRING
})
module.exports=Pessoas;
