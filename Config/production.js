const mysql = require("mysql")

mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER, 
    password: "",
    database: process.env.DB,
    multipleStatements: true,
    port: process.env.PORT
})

mysqlConnection.connect((err) => {
    console.log("Port", process.env.PORT, process.env.HOST, process.env.USER, process.env.PASSWORD)
    if(err) {
        console.log(err)
        console.log("connection failed")
    }else{
        console.log("!!!Database connected")
        const app = require("../server")
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
    }
})

module.exports = mysqlConnection