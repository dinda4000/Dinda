export default function Card(props){
    return(
      <div className="col-sm-3">
        <div className="card card-block text-center"><a href=''>
            <img src={props.Gambar} className="img-fluid" width={300} height={300}/>
            <h5  style={{marginTop: 7}}><b><button type="button" class="btn btn-primary">{props.Judul}</button></b></h5>
          </a>
        </div>
      </div>
        
    
  
    )
}
