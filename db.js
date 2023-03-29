import mysql2 from "mysql2"

export const db = mysql2.createConnection({
    host: "eu-cdbr-west-03.cleardb.net",
    user: "b4f55b53e87fad",
    password: "33eeacaa",
    database: "heroku_457f3647e6d6a8e"
})

function handleDisconnect() {
    db.connect((err) => {
        if (err) {
            console.log('Error connecting to database', err)
            setTimeout(handleDisconnect, 2000)
        } else {
            console.log('Connected to Database')
        }
    });

    db.on('error', (err) => {
        console.log('Database error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.log('Attempting to reconnect to database...')
            handleDisconnect()
        }else{
            throw(err)
        }
    })
}

handleDisconnect()
