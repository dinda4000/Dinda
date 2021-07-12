import React from 'react'
export default function signup() {
    return (
<div className="limiter">
<div className="container-login100">
  <div className="wrap-login100">
    <form className="login100-form validate-form p-l-55 p-r-55 p-t-178">
      <span className="login100-form-title">
      <i className="fa fa-user" />&nbsp;
       Sign Up
      </span>
      <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
        <input className="input100" type="text" name="username" placeholder="Nama" />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter ttl">
        <input className="input100" type="date" name="username" value="Tanggal lahir" />
        <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter Gender">
          <select name id className="input100">
            <option value selected>jenis kelamin</option>
            <option value>pria</option>
            <option value>wanita</option>
          </select>
      <span className="focus-input100" />
      </div>
      <div className="wrap-input100 validate-input" data-validate="Please enter password">
        <input className="input100" type="password" name="pass" placeholder="Password" />
        <span className="focus-input100" />
      </div>
      <div className="text-right p-t-13 p-b-23">
      </div>
      <div className="container-login100-form-btn">
        <button className="login100-form-btn">
          Sign up
        </button>
      </div>
      <div className="flex-col-c p-t-170 p-b-40">
      </div>
    </form>
  </div>
</div>
</div>
    )}