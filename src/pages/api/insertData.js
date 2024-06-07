const {sql} = require('@vercel/postgres')

async function Insert(req,res) {
    try {
        if(req.method !== "POST") {
        return res.status(403).json({message:"Method tidak diperbolehkan"})
        }

        const {nama,komentar,website} = req.body

        if(!nama || !komentar) {
        return res.json({message:"nama atau komentar tidak boleh kosong"})
        }

        const {rows} = await sql`INSERT INTO komentar (nama,komentar,website) VALUES (${nama},${komentar},${website})`

        return res.status(200).json({message:"Berhasi",data:rows})
    } catch (error) {
        console.log(error);
    }
}

export default (Insert)