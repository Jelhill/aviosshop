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

// mysqlConnection.connect((err) => {
//     console.log("Port", process.env.PORT, process.env.HOST, process.env.USER, process.env.PASSWORD)
//     if(err) {
//         console.log(err)
//         console.log("connection failed")
//     }else{
//         console.log("!!!Database connected")
//         const app = require("../server")
//         const PORT = process.env.PORT || 4000
//         app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
//     }
// })


// const mysqlConnection = mysql.createConnection({
//     host: process.env.HOST,
//     user: process.env.USER, 
//     password: process.env.PASSWORD,
//     ssl: false,
//     database: process.env.DB,
// })


// mysqlConnection.connect((err) => {
//     console.log("Port", process.env.PORT, process.env.HOST, process.env.USER, process.env.PASSWORD)
//     if(err) {
//         console.log(err)
//         console.log("connection failed")
//     }else{
//         console.log("!!!Database connected")
//         const app = require("../server")
//         const PORT = process.env.PORT || 4000
//         app.listen(PORT, () => console.log(`::Server running on port ${PORT}`))
//     }
// })

// mysqlConnection.on('error', function(err) {
//     console.log(err.code); // 'ER_BAD_DB_ERROR'
// });

module.exports = mysqlConnection