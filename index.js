const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");


app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1)",
        [description]);
        res.json(newTodo)
    } catch (err) {
        console.error(err.message);
    }

})

app.listen(5000, () => {
    console.log("server listening on port 5000");
});
