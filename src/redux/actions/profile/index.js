import {AXIOS_REQUEST,set_page,is_session,getSession} from "../auth/index"
import {toast} from "react-toastify"

export const get_documnets = email=>{
    return async (dispatch) =>{
        var rdata = await AXIOS_REQUEST("profile/get_document",{email : email})
            if(rdata.status){
                dispatch({ type: "DOCUMENT_DATA", payload: rdata.data });
            }else{
                toast.error(rdata.data);   
            }
    }
}

export const set_depositlimit = (data) =>{
    return dispath =>{
        AXIOS_REQUEST("profile/get_depositlimit",{data : data},(rdata)=>{
            if(rdata.status){
                return dispath({
                    type : "DEPOSIT_LIMIT",
                    payload : rdata.data
                })
            }else{
                toast.error("fail");
            }
        });
    }
}

export const get_depositlimit = (data) =>{
    return dispath =>{
        AXIOS_REQUEST("profile/get_depositlimit",{data : data},(rdata)=>{
            if(rdata.status){
                return dispath({
                    type : "DEPOSIT_LIMIT",
                    payload : rdata.data
                })
            }else{
                toast.error("fail");
            }
        });
    }
}

export const set_notification = (data) =>{
    return async(dispath) =>{
        var rdata =   await AXIOS_REQUEST("profile/set_notification",{data : data})
        if(rdata.status){
            return dispath({
                type : "NOTIFICATION",
                payload : rdata.data
            })
        }else{
            toast.error("fail");
        }
    }
}

export const  get_users=()=>{
    if(is_session()){
        return getSession();
    }else{
        return false;
    }
}

export const get_notification = (data) =>{
    return async(dispath )=>{
        var rdata = await AXIOS_REQUEST("profile/get_notification",{data : data})
        if(rdata.status){
            return dispath({
                type : "NOTIFICATION",
                payload : rdata.data
            })
        }else{
            // toast.error("Please set notification");
        }
    }
}
   

export const reports_email_load = (datas, params) => {
    return  async(dispatch) => {
        var rdata = await AXIOS_REQUEST("reports/reports_email_load",datas)
        if(rdata.status){
            dispatch({ type: "REPORT_GET_ALL_DATA", data: rdata.data })
            var rows =  set_page(params,rdata);
            var fdata = rows['fdata'];
            var totalPages = rows['totalPages'];
            dispatch({
                type: "REPORT_GET_DATA",
                data: fdata,
                totalPages:totalPages,
                params : rows['params']
            });
        }else{
            toast.error('No Record');   
        }
    }
}

export const ReportPageNationChange = (params)=>{
  return (dispatch,getState)=>{
    var row = {
      data : getState().report.allData
    }
    var rows =  set_page(params,row)
    var fdata = rows['fdata'];
    var totalPages = rows['totalPages']
    dispatch({
      type:"REPORT_GET_DATA",
      data: fdata,
      totalPages:totalPages,
      params
    })
  }
}
