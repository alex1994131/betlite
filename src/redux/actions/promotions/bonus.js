import { AXIOS_REQUEST } from "../auth/index"
import { toast } from "react-toastify"
import {history} from "../../../history"

export const Bonusmenuload = (type,email) =>{
    console.log(email)
    return async (dispatch) =>{
        var rdata = await AXIOS_REQUEST("promotions/bonus_menuloads",{type:type})
        console.log('rdata:', rdata)
            if(rdata.status){
                dispatch({ type: "PROMOTIONS_BONUS_DATA", payload: rdata.data });
            }else{
                toast.error(rdata.data);   
            }
    }
}

export const LoadWagered = (params) =>{
    return async (dispatch,getState) =>{
        var email = getState().auth.login.values.email;
        params['email'] = email;
        if(email){
            params['email'] = email;
            var rdata = await AXIOS_REQUEST("promotions/wagered_load",params)
                if(rdata.status){
                    dispatch({ type: "PROMOTIONS_BONUS_DATA_WAGERED", payload: rdata.data });
                }else{
                    toast.error(rdata.data);   
                }
        }else{
            toast.error('No Email');   
        }
    }
}

export const Claim_request = (data) =>{
    return async ()=>{
        var rdata = await AXIOS_REQUEST("promotions/Claim_request",{data : data});
        if(rdata.status){
            console.log(rdata)
            history.push("/welcometobonuspage",{state : rdata.data});
        }else{

        }
    }
}