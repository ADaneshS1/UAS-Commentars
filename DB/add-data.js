require('dotenv').config({path:'.env.development.local'})
const {sql} = require('@vercel/postgres')

async function execeute() {
    try {
        const rows = await sql`INSERT INTO komentar (nama,komentar) VALUES ('Ahmad','bagus banget')`
        return console.log(rows)
    } catch (error) {
        console.log(error)
    }
}

execeute()