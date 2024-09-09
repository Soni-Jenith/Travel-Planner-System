import "./CssFiles/UserProfile.css";
import React, { useState, useEffect } from "react";
import edit_Image from "../../Assets/Icons/edit_Image.png";
import { useNavigate } from 'react-router-dom';

// store_jwt_token_pass_key_for_travel_body
const localstore_key_for = "stored_user_profile_path_for_travel_body"

function UserProfile() {

  const navigate = useNavigate();
  
  function remove_user_data(){
    localStorage.removeItem('store_jwt_token_pass_key_for_travel_body')
    navigate('/')
    window.location.reload()
  }


  const [previewUrl, setPreviewUrl] = useState(null);
  const [user_name, set_user_name] = useState("praharsh");
  const [email, set_email] = useState("praharshpatni@gmail.com");
  const [phone, set_phone] = useState("0000000000");
  const [bg_color, set_bg_color] = useState("img_div_1");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [Save_Visible, set_Save_Visible] = useState(false);
  const [tempName, setTempName] = useState(user_name);

  useEffect(() => {
    let result = window.localStorage.getItem(localstore_key_for)
    if (result){
      setPreviewUrl(result)
    }
    function change_bg_color(user_name) {
      let temp = user_name.charAt(0).toUpperCase();
      let arr_1 = ["A", "B", "C", "D", "E", "F", "G"];
      let arr_2 = ["H", "I", "J", "K", "L", "M"];
      let arr_3 = ["N", "O", "P", "Q", "R", "S"];
      let arr_4 = ["T", "U", "V", "W", "X", "Y", "Z"];

      if (arr_1.includes(temp)) {
        set_bg_color("img_div_1");
      } else if (arr_2.includes(temp)) {
        set_bg_color("img_div_2");
      } else if (arr_3.includes(temp)) {
        set_bg_color("img_div_3");
      } else if (arr_4.includes(temp)) {
        set_bg_color("img_div_4");
      }
    }
    change_bg_color(user_name);
  }, [user_name]);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setPreviewUrl(previewUrl);
      window.localStorage.setItem(localstore_key_for,previewUrl)
    } else {
      alert("no file is selected");
    }
  };
  const handleUploadImg = () => {
    document.getElementById("fileInput").click();
  };
  const handleRemoveImg = () => {
    window.localStorage.removeItem(localstore_key_for)
    setPreviewUrl("");
  };

  const handleImageClick = () => {
    setIsPopupVisible(true);
  };

  const handleSaveName = () => {
    set_user_name(tempName);
    setIsPopupVisible(false);
    set_Save_Visible(true);
    setTimeout(() => {
      set_Save_Visible(false);
    }, 3000);
  };
  const handleClosePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <>
      <div className="user_account">
        <div className="user_profile">
          <div id={bg_color}>
            {previewUrl ? (
              <img src={previewUrl} alt="Selected" width="300" />
            ) : (
              <span className="alt_text">
                {user_name.charAt(0).toUpperCase()}
              </span>
            )}
          </div>

          <input
            style={{ display: "none" }}
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
          <div className="buttons">
            {previewUrl ? (
              <button onClick={handleRemoveImg}>Remove Image</button>
            ) : (
              <button onClick={handleUploadImg}>Upload Image</button>
            )}
          </div>
          <div className="user_info">
            <div className="user_name">
              <div className="user_details">
                <h4>USER NAME</h4>
                <p>{user_name}</p>
              </div>
              <img
                src={edit_Image}
                alt="Edit_image"
                onClick={handleImageClick}
              />
            </div>
            <div className="user_mail">
              <h4>MAIL</h4>
              <p>{email}</p>
            </div>
            <div className="user_phone">
              <h4>PHONE</h4>
              <p>{phone}</p>
            </div>
          </div>
          <button className="log_out" onClick={remove_user_data}>Logout</button>
        </div>
        <div className="user_activity"></div>
      </div>

      {Save_Visible && <div className="succeess_message">Name saved Successfully!</div>};

      {isPopupVisible && (
        <div className="popup">
          <div className="popup_content">
            <h3>Edit Name</h3>
            <input
              type="text"
              value={tempName}
              onChange={(e) => {
                setTempName(e.target.value);
              }}
            />
            <button onClick={handleSaveName}>Save</button>
            <button onClick={handleClosePopup}>Cancel</button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserProfile;
