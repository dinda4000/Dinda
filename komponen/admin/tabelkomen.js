//@ts-check
import useSWR from 'swr'
import { mutate } from 'swr'
import { useState } from 'react'
// import Moment from 'react-moment'

async function fetcher(url) {
  const res = await fetch(url);
  return res.json();
}
export default function tableCerita() {
    const [deleting, setDeleting] = useState(false)
    const url = 'http://localhost:3000/api/komen';
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
        return <div>error......</div>
      }
      if (!data) {
        return <div>loading......</div>
      }
  async function deleteEntry(value) {
    setDeleting(true)
    let res = await fetch(`http://localhost:3000/api/delet-komen?id=${value}`, { method: 'DELETE' })
    let json = await res.json()
    if (!res.ok) throw Error(json.message)
    alert("Data telah dihapus  "  )
    mutate('http://localhost:3000/api/komen')
    setDeleting(false)
  }
    return(
        <div className="container ">
    <div className="d-flex flex-column" >
    <div id="content">
     <h1 className="text-center">Lihat komentar</h1>
    </div>
    <div className="table-responsive text-nowrap">
      <table className="table table-hover table-bordered border-dark">
      <thead className="table-dark">
          <tr>
            <th>NO</th>
            <th>ID_komen</th>
            <th>Komentar</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
        {data.map((komen,index)=>
          <tr>
            <th scope="row">{index+1}</th>
            <td>{komen.id}</td>
            <td>{komen.komentar}</td>
            {/* <td>
              <img
                  className="rounded"
                  src={komen.gambar}
                  alt="Sampul Buku"
                  style={{ width: '70px', height: '70px' }}
                />
            </td> 
            <td>
              <textarea className="form-control" rows={3} >{Cerita.cerita}</textarea>
            </td> */}
            <td>
              <button type="button" className="btn btn-primary btn-sm px-3">
              <i className="fas fa-pencil-alt" />
              </button>
              <button type="button" className="btn btn-danger btn-sm px-3"
              disabled={deleting} 
              value = {komen.id}
              onClick={e => deleteEntry(e.target.value)}     
              >{deleting ? '' : ' ' }
              <i className="fas fa-times" />
              </button>
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
</div>
    )
}