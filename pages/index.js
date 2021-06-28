import React from 'react'
export default function login() {
    return (
      <div>
  <title>login</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <link rel="icon" href="gambar/icn.png" type="image/png" />
  <style dangerouslySetInnerHTML={{__html: "\n              .a {\n                  width: 100%;\n                  padding: 7px 20px;\n                  margin: 8px 0;\n                  box-sizing: border-box;\n                  border: 2px solid #ccc;\n                  -webkit-transition: 0.5s;\n                  transition: 0.5s;\n                  outline: none;\n                  border-radius: 10px;\n                  }\n        " }} />
  <section className="jumbotron text-center" style={{backgroundColor: '#c1e8ff'}}>
    <div className="container block">
      <a className="navbar-brand logo_h" href="temanbacaku.html">
        <img src="/logo.png" alt="logo" style={{width: 250}} />
      </a>
      <h1>Selamat Datang</h1>
      <h2>isi data anda!:</h2>
      <center>
      <table>
          <tbody><tr>
              <td><i className="fa fa-user" /></td>
              <td><input type="text" id="nama" className="a" placeholder="Nama" /></td>          
            </tr>
            <tr>
              <td><i className="fa fa-key" /></td>
              <td><input type="text" id="nama" className="a" placeholder="Paswod" /></td>    
            </tr>
            <tr>
            <td colSpan='2' className="text-center">
            <button type="button" className="btn btn-outline-primary text-center" onclick="simpandata()">masuk</button> &nbsp; or &nbsp; 
            <a href='/signup'><button type="button" className="btn btn-outline-primary text-center" >daftar</button></a>
            </td>   
            </tr>
          </tbody>
    </table>
        
      </center>
    </div>
  </section></div>
    )}
