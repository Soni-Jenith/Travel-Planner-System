import React, { Component } from 'react'
import { jwtDecode } from 'jwt-decode';


export class _home extends Component {
  render() {

    function set_login_data(){
      let store_data = localStorage.getItem('store_jwt_token_pass_key_for_travel_body')
      let user_data = jwtDecode(store_data)
      let user_email = user_data.user_email
      return user_email
    }

    function remove_user_data(){
      localStorage.removeItem('store_jwt_token_pass_key_for_travel_body')
      window.location.reload()
    }
  

    return (
      <div>
        <h1>This is home page </h1>
        <br />
        <h1>Login Email : {set_login_data()}</h1>
        <br />
        <button onClick={remove_user_data} style={{ padding: '20px',fontSize:'2rem' }}>logout</button>

      </div>
    )
  }
}

export default _home
