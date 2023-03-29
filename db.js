import mysql2 from "mysql2";

const db = mysql2.createConnection({
  host: "eu-cdbr-west-03.cleardb.net",
  user: "b4f55b53e87fad",
  password: "33eeacaa",
  database: "heroku_457f3647e6d6a8e"
});

let lastErrorTime = null;
const errorInterval = 5000;

function handleDatabaseError(error) {
  const currentTime = Date.now();

  if (lastErrorTime === null || currentTime - lastErrorTime > errorInterval) {
    console.error(`Error connecting to database: ${error}`);
    lastErrorTime = currentTime;
  }
}

db.connect((error) => {
  if (error) {
    console.error(`Error connecting to database: ${error}`);
    handleDatabaseError(error);
    return;
  }
  console.log("Connected to database!");
});

db.on("error", (error) => {
  console.error(`Database error: ${error}`);
  handleDatabaseError(error);
});

setInterval(() => {
  db.ping((error) => {
    if (error) {
      console.error(`Error pinging database: ${error}`);
      handleDatabaseError(error);
    }
  });
}, errorInterval);