const Sequelize=require('sequelize');

const sequelize=new Sequelize("ola","root","root",{
    host:'localhost',
    dialect:'mariadb'
});
sequelize.authenticate()
.then(function(){
    console.log("Conexão realizada !!");

}).catch(function(){
    console.log("Erro: conexão não realizada !!");
})

module.exports=sequelize;
