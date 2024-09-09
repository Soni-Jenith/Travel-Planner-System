import {local_storage_key} from './All_data'


function is_authenticated_user(){
    const token = localStorage.getItem(local_storage_key);
    if(token){
      return true;
    }else{
      return false;
    }
  };


function store_user_data(data){
  if(data){
    window.localStorage.setItem(local_storage_key,data)
  }else{
    console.log(data);
    alert("Not able to store a user Data")
  }
  window.location.reload();
}

export {is_authenticated_user,store_user_data}