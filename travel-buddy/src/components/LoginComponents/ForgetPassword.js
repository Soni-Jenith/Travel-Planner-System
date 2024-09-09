import React from 'react';
import './css_file/ForgetPassword.css';
import close_button from './img/close.png'

import {useState} from 'react';
import ShowLoder from './sub_component/show_loder';

function ForgetPassword({page_close_function,last_enter_email}) {
  const [user_email,set_user_email] = useState(last_enter_email);
  const [user_otp,set_user_otp] = useState('');
  const [user_password,set_user_password] = useState('');
  const [confirm_password,set_confirm_password] = useState('');

  const [error_confirm_password,error_set_confirm_password] = useState('');
  const [error_user_password,error_set_user_password] = useState('');
  const [error_user_otp,error_set_user_otp] = useState('');
  const [error_user_email,error_set_user_email] = useState('');

  const [current_form, setcurrent_form] = useState(1);
  const [show_loder,set_show_loder] = useState(false);


  const user_confirmation_for_close =  ()=>{
    if (current_form === 1){
      page_close_function()
    }
    if (current_form === 2){
      const result = window.confirm("Are you sure you won't close page \nyour password will not change");
      if (result) { page_close_function()}
    }
    if (current_form === 3){
      const result = window.confirm("Are you sure you won't close page \nyour password will not change");
      if (result) { page_close_function()}
    }
  }

  const change_page_with_animation = (number)=>{
    set_show_loder(true);
    setTimeout(() => {
      set_show_loder(false);
      setcurrent_form(number); 
    }, 2800);
  }

  const validate_email_input = (email) => {
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return email_pattern.test(email);
  };

  const verify_email = (e)=>{
    e.preventDefault()    
    let is_valid = true;
    e.target.disabled = true;
  
    // Validation  - 1
    if(!validate_email_input(user_email)){
      error_set_user_email("Invalid email")
      is_valid = false;
    }else{
      error_set_user_email("")
    }

    // if all set then fetch
    if (is_valid){
      fetch('http://localhost:4000/api/reset_password_verify_email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_email: user_email,
        }),
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("server say : Not-ok\n\nmessage : 'server response was not ok(Not a 200).' ");
        }
      }).then(data => {
        console.log(data);

        if (data.status === 'success') {
          change_page_with_animation(2)
        }else{
          error_set_user_email("Email not found")
        }
      });
      e.target.disabled = true;
      
    }
   
  }

  const verify_OTP =(e)=>{
    e.preventDefault();

    fetch("http://localhost:4000/api/reset_password_verify_otp",{
      method:"POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_send_otp: user_otp,
      }),
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("server say : Not-ok\n\nmessage : 'server response was not ok(Not a 200).' ");
      }
    }).then(data => {
      console.log(data);

      if (data.status === 'verify-pass') {
        change_page_with_animation(3)        
      }else{
        error_set_user_otp("OTP Not match")
      }
    })
  }

  const send_new_password = (e) => {
    e.preventDefault();

    let is_valid = true;
  
    // Validation  - 1
    if (user_password === confirm_password){
      error_set_confirm_password("");
    }else{
      is_valid = false;
      error_set_confirm_password("Password is not match");
    }
    // Validation  - 2
    if (user_password.length < 4) {
      is_valid = false;
      error_set_user_password("Password must be 4 characters");
    }else if (!/\d/.test(user_password)) {
      is_valid = false;
      error_set_user_password("Password must contain one digit");
    }else{
      error_set_user_password("");
    }
    // if all set then fetch
    if(is_valid){
      fetch("http://localhost:4000/api/set_new_password", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: user_email,
          new_password: user_password,
        }),
      }).then(response => {
        if (response.ok) {
          return response.json();
        } else {
          console.log("server say : Not-ok\n\nmessage : 'server response was not ok (Not a 200).' ");
        }
      }).then(data => {
        console.log(data);
    
        if (data.status === 'password-updated') {
          window.alert("Your password will be reset")
          page_close_function()
        } else {
          error_set_user_password("Password update failed");
        }
      });
    }
  
  };
  
  return (
<>
  <div className="full_blur_bg">
    <div className="forget_password_con">
      <img src={close_button} onClick={user_confirmation_for_close} alt="close_button" />

      <form onSubmit={(e)=>{verify_email(e)}} className={current_form === 1 ?"set_active_form":"set_inactive_form"} >
        {show_loder && <ShowLoder/>}
        <div className="title">Reset Your Password</div>
        <div className="info">We will send an OTP to your email for verification.</div>

        <div className="input_group">
          <input type="text" value={user_email} onChange={(e)=>{set_user_email(e.target.value)}} required autoFocus />
          <span className="bar"></span>
          <label>Email</label>
          <div className="all_error_for_input">
            {error_user_email}
          </div>
        </div>
        <input type="submit" />
      </form>

      <form onSubmit={(e)=>{verify_OTP(e)}} className={current_form === 2 ?"set_active_form":"set_inactive_form"} >
      {show_loder && <ShowLoder/>}
        <div className="title">Reset Your Password</div>
        <div className="info">An OTP has been sent to your email <strong>{user_email}</strong> for verification. Please
          enter it below .</div>
        <div className="input_group">
          <input type="text" value={user_otp} onChange={(e)=>{set_user_otp(e.target.value)}} required autoFocus/>
          <span className="bar"></span>
          <label>OTP</label>
          <div className="all_error_for_input">
            {error_user_otp}
          </div>
        </div>
        <input type="submit" />
      </form>

      <form onSubmit={send_new_password} className={current_form===3 ?"set_active_form":"set_inactive_form"}>
      {show_loder && <ShowLoder/>}
        <div className="title">Reset Your Password</div>
        <div className="info">Please enter your new password and confirm it below.</div>
        <div className="input_group">
          <input type="text" value={user_password} onChange={(e)=>{set_user_password(e.target.value)}} required
          autoFocus />
          <span className="bar"></span>
          <label>password</label>
          <div className="all_error_for_input">
            {error_user_password}
          </div>
        </div>
        <div className="input_group">
          <input type="text" value={confirm_password} onChange={(e)=>{set_confirm_password(e.target.value)}} required />
          <span className="bar"></span>
          <label>Confirm password</label>
          <div className="all_error_for_input">
            {error_confirm_password}
          </div>
        </div>
        <input type="submit" />
      </form>



    </div>
  </div>
</>
  );
}

export default ForgetPassword;
