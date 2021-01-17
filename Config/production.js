const mysql = require("mysql")
require("dotenv").config()

const mysqlConnection = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER, 
    password: process.env.PASSWORD,
    ssl: false,
    database: process.env.DB,
})


mysqlConnection.getConnection((err, conn) => {
    if(err) {
        console.log(err)
        console.log("connection failed")
    }else{
        console.log("!!!Database connected")
        const app = require("../server")
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
    }
});


module.exports = mysqlConnection