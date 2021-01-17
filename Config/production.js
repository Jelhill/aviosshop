const mysql = require("mysql")

mysqlConnection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT, 
    password: process.env.PASSWORD,
    database: process.env.DB,
    multipleStatements: true
})

mysqlConnection.connect((err) => {
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