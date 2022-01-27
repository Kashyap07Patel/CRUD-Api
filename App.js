const express = require('express')
const PORT = 9000;
const app = express()
const db = require("./config/db")
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const postRoutes = require('./routes/postRoutes')
app.use('/api/', postRoutes)
// app.get('/api/get', (req, res) => {
//     res.send("ok");
// })
app.listen(PORT, (err) => {
    if (err) throw err;
    else {
        console.log("Server runs on " + PORT)
    }
})
