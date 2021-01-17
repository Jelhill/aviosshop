const mysql = require("mysql")
require("dotenv").config()

mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER, 
    password: process.env.PASSWORD,
    port: 3306,
    database: process.env.DB,
})

mysqlConnection.connect((err) => {
    console.log("Port", process.env.PORT, process.env.HOST, process.env.USER, process.env.PASSWORD)
    if(err) {
        console.log(err)
        console.log("connection failed")
    }else{
        console.log(process.env.PORT)
        console.log("!!!Database connected")
        const app = require("../server")
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
    }
})

module.exports = mysqlConnection