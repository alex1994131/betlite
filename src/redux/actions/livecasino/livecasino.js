import { AXIOS_REQUEST } from "../auth/index";
import {toast} from "react-toastify"
import {LIVECASINO_PROVIDER,LIVECASINO_TYPES,LIVECASINO_GET_ALL_DATA, LIVECASINO_GET_DATA,LIVECASINO_FILTER_DATA,LIVECASINO_TYPE,LIVECASINO_SETPROVIDER} from "../../types"

export const data_load = (bool)=>{
    return async (dispatch)=>{
        var rdata = await AXIOS_REQUEST("firstpage/LivecasinoproviderLoad",{bool :bool});
        if(rdata.status){

            var pdata = rdata.data.pdata;
            var tdata = rdata.data.tdata;
            var gamelist = rdata.data.list;
            var pros = [{name : "All",value : "All"}];
            var types = [{name : "All",value : "All"}];
            
            if(pros){
                for(var i = 0 ; i < pdata.length ; i++){
                    pros.push({name : pdata[i].provider,value : pdata[i].provider});
                }
                dispatch({
                    type : LIVECASINO_PROVIDER,
                    data : pros,
                    moredata : pdata
                })
            }
            if(tdata){
                for(var j = 0 ; j < tdata.length ; j++){
                    types.push({name : tdata[j],value : tdata[j]});
                }
                dispatch({
                    type : LIVECASINO_TYPES,
                    data : types
                })
            }
            dispatch({ type: LIVECASINO_GET_ALL_DATA, data: gamelist});
        }else{
            // toast.error("")
        }
    }
}

export const providerchange = (value,bool)=>{
    return async(dispatch,getState) =>{
        if(value !== "All"){
            var provider = getState().livecasinolist.moredata.find(obj => obj.provider === value);
            var tdata = provider.type;
            var types = [{name : "All",value : "All"}];
            if(tdata){
                for(var i = 0 ; i < tdata.length ; i++){
                    types.push({name : tdata[i],value : tdata[i]});
                }
                dispatch({
                    type : LIVECASINO_TYPES,
                    data : types
                })
            }
           
            dispatch({
                type : LIVECASINO_TYPE,data : {name : "All" ,value:"All"}
            });
        }
        dispatch({
            type : LIVECASINO_SETPROVIDER,setprovider : {name :value ,value:value}
        });
        var returndata = await AXIOS_REQUEST("firstpage/LivecasinoProviderChange",{data : value,bool : bool});
        if(returndata.status){
            var gamelist = returndata.data;
            dispatch({ type: LIVECASINO_GET_ALL_DATA, data: gamelist});
        }else{
            toast.error("server error");
        }
    }
}

export const gametypechange = (value)=>{
    return async(dispatch,getState)=>{        
        dispatch({
            type : LIVECASINO_TYPE,data : {name : value ,value:value}
        });
        var allData  = getState().livecasinolist.allData;
        var filteredData = Filter(value,allData)        
        dispatch({
            type : LIVECASINO_GET_DATA,
            data : filteredData
        })
    }
}

export const filterData = value => {
  return dispatch => dispatch({ type: LIVECASINO_FILTER_DATA, value })
}

function Filter(value,data){
    var filteredData = []
	if(value === "All"){
		filteredData = data;
			return filteredData
	}else{
		filteredData = data
			.filter(item => {
			  let startsWithCondition =  !item.TYPE ? null : item.TYPE.toLowerCase().startsWith(value.toLowerCase())
			  let includesCondition = !item.TYPE ? null :  item.TYPE.toLowerCase().startsWith(value.toLowerCase())
			if (startsWithCondition) {
				return startsWithCondition
			  } else if (!startsWithCondition && includesCondition) {
				return includesCondition
			  } else return null
			});
			return filteredData
	}
}