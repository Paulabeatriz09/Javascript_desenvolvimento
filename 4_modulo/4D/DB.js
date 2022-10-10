const Sequelize=require('sequelize');
const sequelize=new Sequelize('pessoas','nome','idade',{dialect:'mysql',host:'localhost'});

modelue.export=sequelize;