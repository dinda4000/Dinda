import React from 'react'
export default function login() {
    return (
      <div  style={{backgroundColor: '#c1e8ff' }}>
  <section className="jumbotron text-center ">
    <div className="container block">
        <img src="/logo.png" alt="logo" style={{width: 250}} />
      <h1>Selamat Datang</h1>
      <h2>isi data anda!:</h2>
      <center>
      <table className="text-center">
          <tbody><tr>
              <td><i className="fa fa-user" /></td>
              <td><input type="text" id="nama" className="a" placeholder="Nama" /></td>          
            </tr>
            <tr>
              <td><i className="fa fa-key" /></td>
              <td><input type="Password" id="nama" className="a" placeholder="Password" /></td>    
            </tr>
            <tr>
                <td></td>
            <td>
              <button type="button" className="btn btn-outline-primary btn-sm-3" onclick="simpandata()">sign</button>
            </td>   
            </tr>
          </tbody>
    </table>
      </center>
    </div>
  </section></div> 
    )}
