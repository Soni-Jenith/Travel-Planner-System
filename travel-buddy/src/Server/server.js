
// custom  import 
const {write_log_file,error_message,info_message,success_message,normal_message} = require('./modules/_all_help');
const {get_users} = require('./modules/mongodb');
const {send_welcome_page, send_otp_page} = require('./modules/send_server_email');
const { generate_otp, get_otp } = require('./modules/OTP_generate');

const jwt = require("jsonwebtoken")
const express = require("express");
const cors = require("cors");

const User = get_users()
const app = express();

const jwt_secrect_key_value = "jwt_pass_key_for_travel_body"


app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  const req_body = req.body;
  try {
    const userExist = await User.findOne({ email: req_body.user_name });
    if (!userExist) {
      return res
        .status(200)
        .json({ message: "user does not exist", status: "login-fail" });
    } else {
      const user_enter_passwoerd = req_body.password;
      const user_exist_passwoerd = userExist.password;

      if (user_enter_passwoerd === user_exist_passwoerd) {
        info_message(`New Login with Email : ${req_body.user_name}`);
        write_log_file(`New Login with Email :${req_body.user_name}`);
        send_welcome_page(req_body.user_name);

        let user_token = jwt.sign({user_email:userExist.email},jwt_secrect_key_value,{expiresIn:'24h'})

        return res.status(200)
          .json({ message: "user password correct",user_key:user_token, status: "password-pass" });
      } else {
        return res
          .status(200)
          .json({ message: "user password incorrect", status: "password-fail" });
      }
    }
  } catch (err) {
    error_message('Error in login',err)
    res
      .status(200)
      .json({ message: "Internal server error", status: "server-fail" });
  }
});


app.post("/api/register", async (req, res) => {
  const req_body = req.body;
  try {
    const result = await User.findOne({ email: req_body.register_email });
    if (!result) {
      await generate_otp();
      info_message(`server set new  OTP : ${get_otp()}`)
      send_otp_page(req_body.register_email, get_otp());
      return res.status(201).json({ status: "success", user: result });
    } else {
      return res.status(201).json({ message: "User already exists", status: "failed-exist" });
    }
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});


app.post("/api/verify_otp", async (req, res) => {
  const req_body = req.body;
  const body_otp = req_body.user_send_otp;
  let run_code_one_time = 0

  if (body_otp === get_otp()) {
    try {
      const newUser = await User.create({
        username: req_body.user_name,
        email: req_body.user_email,
        password: req_body.user_password,
      });
      if (run_code_one_time == 0){
        info_message(`New register with Email : ${req_body.user_email}`);
        write_log_file(`New register with Email :${req_body.user_email}`);
        let user_token = jwt.sign({user_email:req_body.user_email},jwt_secrect_key_value,{expiresIn:'24h'})
        
        run_code_one_time = 1
        return res.status(200).json({ message: "All will work good",user_key:user_token, status: "verify-pass" });
      }else{
        error_message("server will get erorr at /api/verify_otp")
      }
    } catch (error) {
      error_message("server will get erorr at /api/verify_otp")
      console.error("Error creating user:", error);
      return res.status(500).json({ message: "Internal Server Error", status: "verify-fail" });
    }
  } else {
    error_message(`OTP Status: "Verify fail"`);
    return res.status(200).json({ message: "OTP does not match", status: "verify-fail" });
  }
});


app.post("/api/reset_password_verify_email", async (req,res)=>{
    let body_email = req.body.user_email
    let run_code_one_time = 0
    try {
      const result = await User.findOne({ email: body_email });
      if (result) {
        if (run_code_one_time == 0){
          await generate_otp();
          info_message(`server set new  OTP : ${get_otp()}`)
          send_otp_page(body_email,get_otp());
          run_code_one_time == 1
        }
        return res.status(201).json({ status: "success",message:"no user found in data base" });
      } else {
        return res.status(201).json({ message: "User already exists", status: "failed-exist" });
      }
    } catch (error) {
      console.error("Error finding user:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
});


app.post("/api/reset_password_verify_otp", async (req, res) => {
  const body_otp = req.body.user_send_otp;
  if (body_otp === get_otp()) {

    return res.status(200).json({ message: "user pass with OTP", status: "verify-pass" });
  } else {
    return res.status(200).json({ message: "OTP does not match", status: "verify-fail" });
  }
});

app.post('/api/set_new_password', async (req, res) => {
  const { email, new_password } = req.body;
  try {
    const user = await User.findOneAndUpdate(
      { email },
      { $set: { password: new_password } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    info_message(`Eamil ${email} will set a new password`)
    
    res.status(200).json({ message: 'Password updated successfully' ,status:"password-updated"});
  } catch (error) {
    res.status(500).json({ message: 'Server error', error,status:"password-not-change" });
  }
});


// admin page
// admin page
// admin page
// admin page

// show all user
app.get('/items', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// delete use by email
app.delete('/delete/:email', async (req, res) => {
    try {
      const { email } = req.params;
      const result = await User.deleteOne({ email });
  
      if (result.deletedCount === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

app.post('/add_user', async (req, res) => {
  console.log("o");
  
    const { username, email, password } = req.body;
    console.log(username, email, password );
    

    const newUser = new User({ username, email, password });
    await newUser.save();
    res.send('User added successfully');
});


app.post('/update_user', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      console.log("user not found");
      return res.status(404).send('User not found');
    }

    if (username) user.username = username;
    if (password) user.password = password;

    await user.save();
    res.send('User updated successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


app.listen(4000, () => {
  console.log( 
    "Port : http://localhost:4000\n"
  );
});


