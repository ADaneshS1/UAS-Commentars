import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function Home() {
  const [allData,setAllData] = useState()
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    const nama = event.target.nama.value
    const komentar = event.target.komentar.value
    const website = event.target.website.value

    fetch(`/api/insertData`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        nama:nama,
        komentar:komentar,
        website:website
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      alert(data.message)
      router.reload()
    })
    .catch((err) => {
      console.log(err);
    })

  }

  useEffect(() => {
    fetch(`/api/selectData`)
    .then((res) => res.json())
    .then((data) => {
      setAllData(data.data)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div style={{ marginTop:"50px"}} className="flex flex-col">

      <div className="">
        <h1 style={{ fontSize:"28px", fontFamily:"cursive", textAlign:"center" }}>Profile</h1>
        <p style={{ fontSize:"16px", textAlign:"center" }}>Halo, nama saya Ahmad Danesh Sudiono. Saya seorang programmer pemula yang masih belajar tentang frontend dan backend. Tolong tanggapi karya-karya saya disini. Terima kasih</p>

        <div className="flex flex-row justify-center gap-6 mt-5">
          <div className="flex flex-col">
            <p style={{ fontSize:"23px", fontFamily:"monospace" }}>Projek</p>
            <a href="https://pencatat-uang.vercel.app/">Pencatatan Uang</a>
            <a href="https://daynote-beta.vercel.app/">Catatan Harian</a>
            <a href="https://absensi-karyawan-beryl.vercel.app/">Absensi Karywan</a>
          </div>
          
          <div>
            <p style={{ fontSize:"23px", fontFamily:"monospace" }}>Artikel</p>
            <a href="https://medium.com/@ahmaddaneshsudiono1.ppqita/testing-api-dengan-thunder-client-4038ac04b8d5">Testing API Dengan Thunder Client di NextJs</a>
            <a href="https://medium.com/@ahmaddaneshsudiono1.ppqita/testing-api-dengan-thunder-client-4038ac04b8d5">Testing API Dengan Thunder Client di NextJs</a>
          </div>

          <div>
            <p style={{ fontSize:"23px", fontFamily:"monospace" }}>Linkedin</p>
            <a href="https://www.linkedin.com/in/danesssh">Linkedin</a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-solid border-2 border-black p-10 mx-3">
        <div style={{ fontFamily:"cursive", textAlign:"center", fontSize:"28px" }}>
          <h1>Buat Komentar</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-row justify-center gap-4 mt-10">

          <div className="border-solid border-2 border-black px-2 py-1 rounded-md">
            <input placeholder="Nama" name="nama" required></input>
          </div>

          <div className="border-solid border-2 border-black px-2 py-1 rounded-md">
            <input placeholder="Komentar" name="komentar" required></input>
          </div>

          <div className="border-solid border-2 border-black px-2 py-1 rounded-md">
            <input placeholder="Website" name="website"></input>
          </div>

          <button type="submit" className="border-solid border-2 border-black px-2 py-1 rounded-md">Buat</button>

        </form>
      </div>

      <div className="mt-20">

        <div style={{ fontFamily:"cursive", textAlign:"center", fontSize:"28px" }}>
          <h1>Daftar Komentar</h1>
        </div>

        {allData === null && <h3>Data Kosong</h3> }
        {allData === undefined && <h1 style={{ fontSize:"30px" }}>Loading...</h1> }

        {allData && allData.map((data,index) => {
          return (
            <div key={index} className="font-mono my-5 mx-3 p-3 border-solid border-2 border-black">
              <p>ID: {data.id}</p>
              <p>Nama: {data.nama}</p>
              <p>Komentar: {data.komentar}</p>
              <p>Website: <a href={data.website}>{data.website} </a> </p>
            </div>
          )
        })}

      </div>
     
    </div>


  )
}
