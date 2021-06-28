//@ts-check
import Jumbotron from '../komponen/jumbotron'
import Card from '../komponen/card'

export default function Home() {
  const card=[
    {gambar:'/boro.jpg',link:'/borobudur' , tombol:'borobudur'},
    {gambar:'/prambanan.jpg',link:'/prambanan' , tombol:'prambanan'},
    {gambar:'/takus.jpeg',link:'/muaratakus' , tombol:'muara takus'},
    {gambar:'/sewu.jpg',link:'/lawangsewu' , tombol:'lawang sewu'},
    {gambar:'/Daya-Tarik-Danau-Toba.jpg',link:'/danautoba' , tombol:'danau toba'},
    {gambar:'/sate.jpg',link:'/gedungsate' , tombol:'gedung sate'},
    {gambar:'/boro.jpg',link:'' , tombol:'borobudur'},
    {gambar:'/boro.jpg',link:'' , tombol:'borobudur'}
  ]
  return (
<div className="row"> 
<Jumbotron/>
<div className="py-5 bg-white" id="speakers">
    <div className="container-fluid"></div>
<div className="row">
      <div className="col-md-12 text-dark text-center">
          <h1><b><i>SALAH SATU SEJARAH</i></b></h1>
        </div>
      </div>
<div className="row">
  { card.map((isicard) => (
    <Card Gambar={isicard.gambar} Link={isicard.link} Tombol={isicard.tombol} />
  ))
}
</div>
  </div>
</div> 
  )
}
