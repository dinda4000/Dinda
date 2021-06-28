import React from 'react'
export default function signup() {
    return (
    <div>
  <title>sejarah</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
  <link rel="icon" href="gambar/icn.png" type="image/png" />
  <style dangerouslySetInnerHTML={{__html: "\n              .a {\n                  width: 100%;\n                  padding: 7px 20px;\n                  margin: 8px 0;\n                  box-sizing: border-box;\n                  border: 2px solid #ccc;\n                  -webkit-transition: 0.5s;\n                  transition: 0.5s;\n                  outline: none;\n                  border-radius: 10px;\n                  }\n                  .select{\n                  -webkit-appearance: menulist-button;\n                  height:30px;\n                  border-radius: 10px;\n                  padding: 5px 20px;\n              }\n        " }} />
  <section className="jumbotron text-center" style={{backgroundColor: '#c1e8ff'}}>
    <div className="container block">
      <a className="navbar-brand logo_h" href="temanbacaku.html">
        <img src="/logo.png" alt="logo" style={{width: 350}} />
      </a>
      <h1>Selamat Datang</h1>
      <h2>isi data anda!:</h2>
      <center>
        <table>
          <tbody><tr>
              <td><i className="fa fa-user" /></td>
              <td><input type="text" id="nama" className="a" placeholder="nama" /></td>          
            </tr>
            <tr>
              <td><i className="fa fa-calendar-alt" /></td>
              <td><input type="date" id="ttl" className="a" placeholder="tanggal lahir" /></td>          
            </tr>
            <tr>
              <td><i className="fa fa-venus-mars" /></td>
              <td>
                <select name id className="select">
                  <option value selected>   jenis kelamin</option>
                  <option value>pria</option>
                  <option value>wanita</option>
                </select>
              </td>          
            </tr>
            <tr>
              <td><i className="fa fa-user" /></td>
              <td><input type="text" id="nama" className="a" placeholder="Nomor HP" /></td>          
            </tr>
            <tr>
              <td><i className="fa fa-key" /></td>
              <td><input type="text" onclick="umur()" id="pswd" className="a" placeholder="paswod" /></td>          
            </tr>
            <tr><td><br /></td></tr>
            <tr>
              <td colSpan='2'className="text-center"><button type="button" className="btn btn-outline-primary" onclick="simpandata()">daftar</button></td>
            </tr>
          </tbody></table>
      </center>
    </div>
  </section></div>
    )}