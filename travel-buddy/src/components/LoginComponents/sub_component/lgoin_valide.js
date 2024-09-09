const handle_login_submit = (event) => {
    event.preventDefault();
    let is_valid = true;

    if (validateEmail(login_email)) {
      set_login_email_error("");
    } else {
      set_login_email_error("Invalid email");
      is_valid = false;
    }
    if (is_valid) {
      fetch('http://localhost:4000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          user_name: login_email,
          password: login_password
        }),
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            console.log("server say : Not-ok\n\nmessage : 'server response was not ok(Not a 200).' ");
          }
        })
        // check by server code-- login
        .then(data => {
          console.log(data);
          set_login_password_error("");
          set_login_email_error("");

          if (data.status === 'login-fail') {
            set_login_email_error("Enter Email is does not exist");
          }else{
            if (data.status === 'password-fail') {
              set_login_password_error("Enter password is incorrect");
            } else if(data.status === 'password-pass'){
              set_login_password_error("");
              alert('User will Login with');
            } else if(data.status === 'server-fail'){
              alert('Internal server error');
            }else {
              alert('Not valid data send by server');
            }
            set_login_email_error("");
          }
        })
        .catch(error => {
          console.log("while run java script error\n\nError :", error);
        });

    }
  };

export default handle_login_submit;