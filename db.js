import mysql2 from "mysql2"

export const db = mysql2.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b4f55b53e87fad",
    password: "33eeacaa",
    database: "heroku_457f3647e6d6a8e"
})
