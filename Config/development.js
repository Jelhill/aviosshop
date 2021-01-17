// const mongoose = require("mongoose")
// require("dotenv").config()

// mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, client){
//     if(err) {
//         console.log("cannot connect to Database")
//         console.log(err)
//         process.exit(1)
//     }else{
//         console.log(`::Database Connected on !!!Dev DB`)
//         module.exports = client
//         const app = require("../server")
//         const PORT = process.env.PORT || 5000
//         app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
//     }
// })

const mysql = require("mysql")
mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root", 
    password: "Fcbarcelona10",
    database: "Avios",
    multipleStatements: true
})

mysqlConnection.connect((err) => {
    console.log("connecting....")
    if(err) {
        console.log("connection failed")
    }else{
        console.log("!!!Database connected")
        const app = require("../server")
        const PORT = process.env.PORT || 4000
        app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
    }
})

module.exports = mysqlConnection