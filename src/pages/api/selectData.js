const {sql} = require('@vercel/postgres')

async function Select(req,res) {
    try {
        if(req.method !== "GET") {
            return res.status(403).json({message:"Method tidak diizinkan"})
        }

        const {rows} = await sql`SELECT * FROM komentar`
        return res.status(200).json({message:"berhasi",data:rows})
    } catch (error) {
        console.log(error)
    }
}

export default (Select)