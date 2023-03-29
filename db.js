import mysql2 from "mysql2"

export const db = mysql2.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b4f55b53e87fad",
    password: "33eeacaa",
    database: "heroku_457f3647e6d6a8e"
})


let lastErrorTime = null;
function handleDatabaseError() {
    const currentTime = Date.now();

    if (lastErrorTime === null || currentTime - lastErrorTime > 5000) {
        console.error(`Error connecting to database: ${error}`);
        lastErrorTime = currentTime;
    }

}

db.on('error', handleDatabaseError);