export default function Card(props){
    return(
       
  
        <div className="col-6 col-lg-4 bg-white animate-in-left">
          <center><a href={props.Link}>
            <img src={props.Gambar} className="center-block img-fluid my-3 " width={300} height={300}/>
            <h5><b><button type="button" class="btn btn-primary">{props.Tombol}</button></b></h5>
          </a></center>
        </div>
        
    
  
    )
}
