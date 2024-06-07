require('dotenv').config({path:'.env.development.local'})
const {sql} = require('@vercel/postgres')

async function execute() {
    try {
        const deleteTable = await sql`DROP TABLE komentar`
        const rows = await sql`CREATE TABLE IF NOT EXISTS komentar (
            id SERIAL PRIMARY KEY,
            nama VARCHAR(20) NOT NULL,
            website VARCHAR(50),
            komentar VARCHAR(160) NOT NULL
        )`
        return console.log(rows)
    } catch (error) {
        console.log(error)
    }
}

execute()