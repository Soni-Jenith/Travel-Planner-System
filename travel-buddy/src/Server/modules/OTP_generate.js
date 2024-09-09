const crypto = require('crypto');

let otp_set = '';

function generate_otp() {
  otp_set = crypto.randomInt(100000, 999999).toString();
  return otp_set;
}

function get_otp() {
  return otp_set;
}

module.exports = { generate_otp, get_otp };
