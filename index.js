const express = require('express')
const app = express()
const PORT = 3001
const getRoutes = require("./routes/getRoutes")

app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", getRoutes)

app.listen(PORT, () => {
    console.log("server is running");
})
