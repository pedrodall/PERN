const Pool = require("pg").Pool;

const pool = new Pool({
    user: "pedro",
    password : "2066",
    port : "5432",
    database: "pern"
});

module.exports = pool;