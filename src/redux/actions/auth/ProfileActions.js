import {AXIOS_REQUEST,setSession} from './index'
import {toast} from "react-toastify"
import {history} from '../../../history'

export const Againregister = (user) =>{
  return async(dispatch) =>{
    var rdata = await AXIOS_REQUEST("users/againusersave",{user : user});
    if(rdata.status){
   
    }else{
      toast.error(rdata.data)
    }
   
  }
}

export const changepassword =(user) =>{
  return async(dispatch) =>{
    var response = await AXIOS_REQUEST("users/adminchangepassword",{user});
    if(response.status){
      setSession(response.token);
      history.push(history.location.pathname);
    }else{
      alert(response.data.data)
    }
  }
}

export const get_userinfor =(user) =>{
  
  return async(dispatch) =>{
    var response = await AXIOS_REQUEST("users/get_userinfor",{user});
    if(response.status){
      return dispatch({
        type : "PROFILE_USER",
        data : response.data
      })
    }else{
      // alert(response.data.data)
    }
  }
}
