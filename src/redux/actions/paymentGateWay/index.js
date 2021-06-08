import {AXIOS_REQUEST,set_page} from "../auth/index"
import { toast } from "react-toastify"

export const PaymentMenuload = (params) => {
    return  async (dispatch,getState) => {
        var data = getState().auth.login.values.email;
        params['email'] = data;
      var rdata = await AXIOS_REQUEST("paymentGateWay/menuloads",params)
      if(rdata.status){
        dispatch({ type: "PAYMENTMENU_DATA", data: rdata.data })
      }else{
        toast.error("fail")
      }
    }
}

export const paymentMethodLoad = (params) => {
    return  async (dispatch,getState) => {
        var data = getState().auth.login.values.email;
        params['email'] = data;
        var rdata = await AXIOS_REQUEST("paymentGateWay/paymentMethodLoad",params)
        if(rdata.status){
            dispatch({ type: "PAYMENTMETHOD_DATA", data: rdata.data })
        }else{
            toast.error("fail")
        }
    }
}

export const YaarPayWithdraw = row => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/YaarPayWithdraw",row)
          if(rdata.status){
              toast.success(rdata.data);   
          }else{
              toast.error(rdata.data);   
          }
    }
}

export const netcentsResults = order_no => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/netcentsResults",{order_no})
          if(rdata.status){
              dispatch({ type: "PAYMENT_RESULTS_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);   
          }
    }
}

export const QpayResults = order_no => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/QpayResults",{order_no})
          if(rdata.status){
              dispatch({ type: "PAYMENT_RESULTS_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);   
          }
    }
}

export const YaarPayResults = order_no => {
    return  async(dispatch) => {
      var rdata = await AXIOS_REQUEST("paymentGateWay/YaarResults",{order_no})
          if(rdata.status){
              dispatch({ type: "PAYMENT_RESULTS_DATA", data: rdata.data })
          }else{
              toast.error(rdata.data);   
          }
    }
}

export const netcentCheckOut = (row)=>{
    return async dispath=>{
        var rdata =  await AXIOS_REQUEST("paymentGateWay/netcentCheckOut",{data : row})        
        if(rdata.status){
            window.location.href = rdata.data;
        }else{
            toast.error(rdata.data);   
        }
    }
}

export const QpayCheckOut = params => {
    return  async(dispatch) => {
        if(!params.email){
            toast.error('email undefined');   
        }else{
            var rdata = await AXIOS_REQUEST("paymentGateWay/QpayCheckOut",{params})
                if(rdata.status){
                    dispatch({ type: "PAYMENTGATEWAY_QPAY_CHEKOUT_DATA", data: rdata });
                }else{
                    toast.error(rdata.data);   
                }
        }
    }
}

export const YaarPayCheckOut = params => {
    return  async(dispatch) => {
        if(!params.email){
            toast.error('email undefined');   
        }else{
            var rdata = await AXIOS_REQUEST("paymentGateWay/YaarPayCheckOut",{params})
                if(rdata.status){
                    dispatch({ type: "PAYMENTGATEWAY_YAARPAY_CHEKOUT_DATA", data: rdata });
                }else{
                    toast.error(rdata.data);   
                }
        }
    }
}


export const transactionHistoryLoad = (email,params) => {
    return  async(dispatch) => {
        if(!email){
            toast.error('email undefined');   
        }else{
            var rdata = await AXIOS_REQUEST("paymentGateWay/transactionHistoryLoad",email)
            if(rdata.status){
              dispatch({ type: "TRANSACTION_HISTORY__GET_ALL_DATA", data: rdata.data })
              var rows =  set_page(params,rdata);
              var fdata = rows['fdata'];
              var totalPages = rows['totalPages'];
                dispatch({
                  type: "TRANSACTION_HISTORY__GET_DATA",
                  data: fdata,
                  totalPages:totalPages,
                  params : rows['params']
                });
            }else{
                toast.error(rdata.data);   
            }
        }
    }
}


export const pagenationchange = (params)=>{
    return (dispatch,getState)=>{
      var row = {
        data : getState().paymentGateWay.allData
      }
      var rows =  set_page(params,row)
      var fdata = rows['fdata'];
      var totalPages = rows['totalPages']
      dispatch({
        type:"TRANSACTION_HISTORY__GET_DATA",
        data: fdata,
        totalPages:totalPages,
        params
      })
    }
  }
  

export const WithdrawHistoryLoad = (email,params) => {
    return  async(dispatch) => {
        if(!email){
            toast.error('email undefined');   
        }else{
            var rdata = await AXIOS_REQUEST("paymentGateWay/WithdrawHistoryLoad",email)
            if(rdata.status){
              dispatch({ type: "WITHDRAW_HISTORY__GET_ALL_DATA", data: rdata.data })
              var rows =  set_page(params,rdata);
              var fdata = rows['fdata'];
              var totalPages = rows['totalPages'];
                dispatch({
                  type: "WITHDRAW_HISTORY__GET_DATA",
                  data: fdata,
                  totalPages:totalPages,
                  params : rows['params']
                });
            }else{
                toast.error(rdata.data);   
            }
        }
    }
}

export const Withdrawpagenationchange = (params)=>{
    return (dispatch,getState)=>{
      var row = {
        data : getState().paymentGateWay.allData
      }
      var rows =  set_page(params,row)
      var fdata = rows['fdata'];
      var totalPages = rows['totalPages']
      dispatch({
        type:"WITHDRAW_HISTORY__GET_DATA",
        data: fdata,
        totalPages:totalPages,
        params
      })
    }
  }
