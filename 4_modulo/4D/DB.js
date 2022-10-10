const Sequelize=require('sequelize');
const sequelize=new Sequelize('cadastro'),{dialect:'mysql',host:'localhost'});

modelue.export=sequelize;