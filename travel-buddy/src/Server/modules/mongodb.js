const mongoose = require("mongoose");
const chalk = require("chalk");


function get_users(){
  const uri = "mongodb://localhost:27017/mydatabase";
mongoose.connect(uri)
  .then( () => console.log(chalk.green("Connected to MongoDB")) )
  .then( () => console.log(chalk.green("\nReact App Start in few seconds...\n")) )
  .catch( (err) => {
    console.log(chalk.green(`Could not connect to MongoDB`));
    console.error(err);
} );

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String, 
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

return new mongoose.model("user", userSchema);
}

module.exports = {get_users}