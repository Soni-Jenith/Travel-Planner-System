// admin_id_?tjSFS1f21s1fSF

import React, { useState, useEffect } from "react";
import "./css_file/AdminPage.css";
import * as XLSX from "xlsx";
import Burger_bar from "./img/admin_page/menu.png";
import Delete_button from "./img/admin_page/delete.png";
import re_reload from "./img/admin_page/loading-arrow.png";
import edit_button from "./img/admin_page/pen.png";
import close_button from "./img/admin_page/close.png";
import i_button from "./img/admin_page/letter-i.png";
import total_user from "./img/admin_page/total_user (2).png";

function App() {
  const [is_aside_visible, set_aside_visible] = useState(false);
  const [active_section, set_active_section] = useState("View user data");
  const [data, set_data] = useState([]);
  const [selected_check_box, set_selected_check_box] = useState([]);


  const [show_update_form,set_show_update_form] = useState(false);
  const [show_add_user_form,set_show_add_user_form] = useState(false);

  const [show_user_data, set_show_user_data] = useState(false);
  const [user_search, set_user_search] = useState("");
  const [select_user, set_select_user] = useState("");
  const [select_email, set_select_email] = useState("");
  const [select_password, set_select_password] = useState("");


  // get data
  function re_fetch_data() {
    console.log("get api");
    
    fetch("http://localhost:4000/items")
      .then((response) => response.json())
      .then((result) => set_data(result))
      .catch((error) => console.error("Error fetching data:", error));
    document
      .getElementById("re_fetch_data")
.classList.remove("re_fetch_data_animation");
    document
      .getElementById("re_fetch_data")
      .classList.add("re_fetch_data_animation");
    setTimeout(() => {
      document
        .getElementById("re_fetch_data")
        .classList.remove("re_fetch_data_animation");
    }, 1000);
  }
  useEffect(() => {
    re_fetch_data();
  }, []);

  // on--off-- side bar
  function toggle_aside() {
    set_aside_visible(!is_aside_visible);
  }

  //on click to chage section
  function set_section_on_click(section) {
    toggle_aside();
    set_active_section(section);
  }

  
  // req send to server
  function handle_delete_email(email) {
    console.log("Email:", email);
    fetch(`http://localhost:4000/delete/${email}`, { method: "DELETE" }).then(
      () => {
        re_fetch_data();
      }
    );
  }

  // add email in [] for other funtion
  const on_change_checkbox_sate = (email, isChecked) => {
    if (isChecked) {
      set_selected_check_box((prevSelected) => [...prevSelected, email]);
    } else {
      set_selected_check_box((prevSelected) =>
        prevSelected.filter((item) => item !== email)
      );
    }
  };



  // select fun - 1 : all select
  const handle_select_all = () => {
    set_selected_check_box(data.map((item) => item.email));
  };
  // select fun - 3 : remove all select
  const handle_remove_all_selected = () => {
    set_selected_check_box([]);
  };
  // select fun - 2 : inversion select
  const handle_inversion_select = () => {
    let inverted_selection = data.map((item) => {
        if (selected_check_box.includes(item.email)) {
          return 0;
        } else {
          return item.email;
        }
      })
      .filter((item) => item !== 0);

    set_selected_check_box(inverted_selection);
  };

  // download part - 1 JSON
  const get_JSON_file_from_selected = () => {
    if (selected_check_box.length === 0) {
      alert("No checkboxes are selected.");
      return;
    }
    const selected_data = data.filter((item) => selected_check_box.includes(item.email) );
    const json_data = JSON.stringify(selected_data, null, 2);

    const blob = new Blob([json_data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "selected_JSON_data.json";
    link.click();
    URL.revokeObjectURL(url);
  };

  // download part - 1 text
  const get_TEXT_file_from_selected = () => {
    if (selected_check_box.length === 0) {
      alert("No checkboxes are selected.");
      return;
    }
    const selected_data = data.filter((item) => selected_check_box.includes(item.email));

    const set_text_data = selected_data.map((item) =>`Username: ${item.username}\nEmail: ${item.email}\nPassword: ${item.password}\n`).join("\n-------------------\n\n");

    const blob = new Blob([set_text_data], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "selected_text_data.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  // download part - 1 excel
  const get_EXCEL_file_from_selected = () => {
    if (selected_check_box.length === 0) {
      alert("No checkboxes are selected.");
      return;
    }
    const set_text_data = data.filter((item) => selected_check_box.includes(item.email));

    // Convert selected data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(set_text_data);

    // Create a new workbook and append the worksheet
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Selected Data");

    // Generate Excel file and trigger download
    XLSX.writeFile(workbook, "selectedData.xlsx");
  };



  const [temp_name,set_temp_name] = useState('')
  const [temp_email,set_temp_email] = useState('')
  const [temp_password,set_temp_password] = useState('')
  
  // edit table data
  const handle_edit = (user_select_email) => {
    let temp_data = data.filter(item => item.email === user_select_email);

    set_temp_name(temp_data[0].username);
    set_temp_email(temp_data[0].email);
    set_temp_password(temp_data[0].password);
    
      
    set_show_update_form(true)

  };

  const add_new_user_form = (event) => {
    event.preventDefault();
    const form_data = new FormData(event.target);
    const send_server_data = {
      username: form_data.get("username"),
      email: form_data.get("email"),
      password: form_data.get("password"),
    };
    fetch("http://localhost:4000/add_user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(send_server_data),
    })
      .then((response) => response.json)
      .then((result) => {
        console.log(result);
      })
      .then(() => {
        re_fetch_data();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const update_user_form = (event)=>{
    event.preventDefault();
    const form_data = new FormData(event.target);
    fetch('http://localhost:4000/update_user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: form_data.get("email"),
        username:form_data.get("username"),
        password: form_data.get("password")
      })
    })
    .then(response => response.text())
    .then(data => {alert(data);})
    .then(() => {
      re_fetch_data();
    })
    .catch(error => {console.error('Error:', error);});
  }

  const HtmlForm = ({ title,close_funtion,onSubmit ,user_name,user_email,user_password}) => {
    const [F_temp_name,set_F_temp_name] = useState(user_name);
    const [F_temp_email,set_F_temp_email] = useState(user_email);
    const [F_temp_password,set_F_temp_password] = useState(user_password);
    return (
      <form id="Admin_page_form"  method="post" onSubmit={onSubmit}>
        <div className="title">{title}</div>
        <div className="form_data">
          <span className="NOTE">
            NOTE : form validation must            
          </span>
          <div>
            <label>Name:</label>
            <input type="text" onChange={(e)=>set_F_temp_name(e.target.value)} value={F_temp_name}  name="username" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" onChange={(e)=>set_F_temp_email(e.target.value)} value={F_temp_email} name="email" required />
          </div>
          <div>
            <label>Password:</label>
            <input type="text" onChange={(e)=>set_F_temp_password(e.target.value)} value={F_temp_password} name="password" required />
          </div>
          <div>
            <button type="submit">Submit</button>
            <div className="close_button" onClick={close_funtion}>
              <img src={close_button} alt="clsoe me" />
            </div>
          </div>
        </div>
      </form>
    );
  };

  const handle_set_data_for_select = (user_name, email, password) => {
    set_select_user(user_name);
    set_select_email(email);
    set_select_password(password);
  };

  const show_data = () => {
    set_show_user_data(!show_user_data);
  };
  const TableData = ({ username, email, password }) => {
    return (
      <>
        <div className="set_one_data_table">
          <div className="title">User Data</div>
          <div className="user_data">
            <span>Name : {username}</span>
            <span>Name : {email}</span>
            <span>Name : {password}</span>
          </div>
          <div className="close_button" onClick={show_data}>
            <img src={close_button} alt="clsoe me" />
          </div>
        </div>
      </>
    );
  };



  const user_search_set = (text_to_serarch) => {
    set_user_search(text_to_serarch);
  };

  const set_check = (e) => {
    const checkbox = e.currentTarget.querySelector('td input[type="checkbox"]');

    let is_valide_click = true;
    let user_target = e.target.tagName.toLowerCase();

    if (user_target === "img") {
      is_valide_click = false;
    } else if (user_target === "button") {
      is_valide_click = false;
    } else if (user_target === "input") {
      is_valide_click = false;
    } else {
      is_valide_click = true;
    }

    if (checkbox && is_valide_click) {
      checkbox.click();
    }
  };

  const [show_drop_down, set_show_drop_down] = useState(false);

  return (
    <>
      {/* top nav bar */}
      <nav>
        <img src={Burger_bar} alt="Burger_bar" onClick={toggle_aside} />
        <span className="title">Login as Admin</span>
      </nav>
      {/* side bar */}
      <aside className={is_aside_visible ? "hidden" : "visible"}>
        <ul>
          <li className={`${ active_section === "View user data" ? "set_as_activity" : ""}`} onClick={() => set_section_on_click("View user data")}>
            View user data
          </li>
          <li className={`${ active_section === "section_2" ? "set_as_activity" : "" }`}onClick={() => set_section_on_click("section_2")}>
            section_2
          </li>
          <li className={`${ active_section === "section_3" ? "set_as_activity" : "" }`} onClick={() => set_section_on_click("section_3")} >
            section_3
          </li>
          <li className={`${ active_section === "Export user data" ? "set_as_activity" : "" }`} onClick={() => set_section_on_click("Export user data")}>
            Export user data
          </li>
        </ul>
      </aside>

      {/* set full scrren blure (no aside) */}
      <div className={is_aside_visible ? "remove_set_full_bg" : "set_full_bg"} onClick={toggle_aside}> </div>

      {/* main page for all */}
      {show_user_data && (<TableData username={select_user} email={select_email} password={select_password} />)}
      {show_update_form && ( 
        <HtmlForm title="Edit Data" 
        user_name={temp_name}
        user_email={temp_email}
        user_password={temp_password}
        close_funtion={()=>{set_show_update_form(!show_update_form)}}
        onSubmit={update_user_form}
         />)}

      {show_add_user_form && ( 
        <HtmlForm title="Add Data" 
        user_name={""}
        user_email={""}
        user_password={""}
        close_funtion={()=>{set_show_add_user_form(!show_add_user_form)}}
        onSubmit={add_new_user_form}
         />)}

      <main>
        <section className={`View user data ${ active_section === "View user data" ? "section_visible": "section_hidden"}`}>

          <div className="sub_nav">
            <input type="text" value={user_search} onChange={(e) => { user_search_set(e.target.value); }} placeholder="search here" />

            <div className="drop_down_menu_con" onMouseEnter={() => { set_show_drop_down(true); }} onMouseLeave={() => {set_show_drop_down(false); }}>
              <div className="drop_down_label">export data ▼</div>
              <div className={ show_drop_down ? "drop_down_item_con": "drop_down_item_con disable_me"}>
                <div className="item" onClick={get_JSON_file_from_selected}>
                  JSON
                </div>
                <div className="item" onClick={get_EXCEL_file_from_selected}>
                  Excle
                </div>
                <div className="item" onClick={get_TEXT_file_from_selected}>
                  Text
                </div>
              </div>
            </div>

            <button onClick={()=>{set_show_add_user_form(!show_add_user_form)}}>Add data</button>
            <button onClick={handle_remove_all_selected}>deselect all</button>
            <button onClick={handle_inversion_select}>inversion Select</button>
            <button onClick={handle_select_all}>Select All</button>
            <button onClick={re_fetch_data} id="re_fetch_data"> <img src={re_reload} alt="re load data" /> </button>
          </div>

          {/* counting section */}
          <div className="data_container">
            <div className="show_data">
              <img src={total_user} alt="" />
              <div className="text">
                <div className="static_Text">Total Users </div>
                <div className="dynamic_Text">{data.length} users</div>
              </div>
            </div>
            <div className="show_data">
              <img src={Burger_bar} alt="" />
              <div className="text">
                <div className="static_Text">not available</div>
                <div className="dynamic_Text">0</div>{" "}
              </div>
            </div>
            <div className="show_data">
              <img src={Burger_bar} alt="" />
              <div className="text">
                <div className="static_Text">not available</div>
                <div className="dynamic_Text">0</div>
              </div>
            </div>
          </div>

          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Username</th> 
                <th>Email</th> 
                <th>Password</th>
                <th>operations</th>
              </tr>
            </thead>
            <tbody>
              {data.filter((item) =>
                    (item.username && item.username.includes(user_search)) ||
                    (item.email && item.email.includes(user_search)) ||
                    (item.password && item.password.includes(user_search))
                ).map((item, index) => (
                  <tr key={index} onClick={(event) => { set_check(event); }}>
                    <td>
                      <input type="checkbox" checked={selected_check_box.includes(item.email)} onChange={(e) => on_change_checkbox_sate(item.email, e.target.checked) } />
                    {index + 1}.
                    </td>
                    <td>{item.username}</td>
                    <td>{item.email}</td>
                    <td>{item.password}</td>
                    <td>
                      <div className="operations">
                        <button onClick={() => { handle_set_data_for_select( item.username, item.email, item.password ); show_data();}}>
                          <img src={i_button} alt="i_button" />
                        </button>
                        <button onClick={() => handle_edit(item.email)}>
                          <img src={edit_button} alt="Edite button" />
                        </button>
                        <button onClick={() => { handle_delete_email(item.email); }}>
                          <img src={Delete_button} alt="delet" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </section>

        <section className={`section_2 ${ active_section === "section_2" ? "section_visible" : "section_hidden" }`} >
          <div className="sub_nav">2</div>
          <h1>This page for filter data</h1>
          <br />
          <h3>1.filter a user with (Username Email Password)</h3>
          <br />
          <h3>2.set asanding and disending order in it</h3>
          <br />
          <h3> (IMP) 3.SHow user status like (Online,last login time)</h3>
        </section>
        <section className={`section_3 ${ active_section === "section_3" ? "section_visible" : "section_hidden" }`}>
          <div className="sub_nav">3</div>
          <h1>this page for email</h1>
          <br />
          <h3>1. admin can read email on it</h3>
          <br />
          <h3>2. admin can sned email from it</h3>
        </section>
        <section className={`Export user data ${ active_section === "Export user data" ? "section_visible" : "section_hidden" }`}>
          <div className="sub_nav">4</div>
          <h1>this is only test page not fix use</h1>
          <br />
          <h3>in future use like manage website data when it full create </h3>
          <h3>like mange user itinerary that create</h3>
        </section>
      </main>
    </>
  );
}

export default App;
