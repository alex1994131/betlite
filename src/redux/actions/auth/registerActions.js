import {currency} from "./currency"
import {AXIOS_REQUEST} from "./index"
import {toast} from "react-toastify"
import request from "request"



export const get_iplocation = ()=>{
  return dispatch =>{
    var options = {
      'method': 'GET',
      'url': 'https://api.ipify.org/?format=json',
      'headers': {
      }
    };
    request(options,async function (error, response) {
      if (error) {
        toast.error("The connection with the server has failed.");
      }else{
        var ip = JSON.parse(response.body).ip;
        var rdata = await AXIOS_REQUEST("users/get_iplocation",{ ip : ip })
          if(rdata.status){
            var currency1 = currency();
            rdata.data['currency'] = currency1;
            dispatch({
              type : 'IPLOCATION',
              payload : rdata.data
            })
          }else{
            toast.error("The connection with the server has failed.");
          }
      }
    });
  }
}