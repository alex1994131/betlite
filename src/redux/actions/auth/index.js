import * as loginAction from "./loginActions"
import { Root} from "../../../authServices/rootconfig"
import jwt from "jwt-simple"
import { history } from "../../../history"
import axios from "axios"
import JwtDecode from "jwt-decode"

export default loginAction

export const objectcompare = (object1,object2)=>{
	for(var i in object1){
		if(object1[i] !== object2[i]){
			return false;
		}
	}
	return true;
}

export const setSession = (string)=>{
	localStorage.setItem(Root.token,string);
	return true;
}

export const deleteSession = ()=>{
	localStorage.setItem(Root.token,undefined);
	return true;
}

export const getSession =()=>{
	var session =  sessioninfor();
	return jwt_de(session);
}

export const url_path = ()=>{
	return history.location.pathname;
}

export const setAXIOS = ()=>{
	axios.defaults.headers.common['Authorization'] = sessioninfor();
	return true;
}

export const is_session = ()=>{
	if(localStorage[Root.token]&& localStorage[Root.token]!== "undefined"){
		return true;
	}else{
		return false;
	}
}

export const sessioninfor = ()=>{
	return localStorage.getItem(Root.token);
}

export const fake_session = ()=>{
	localStorage.setItem(Root.token,undefined);
}

export const deleteAXIOS = ()=>{
	delete axios.defaults.headers.common['Authorization'];
	return true;
}

export const jwt_de = (session) =>{
	try{
		return JwtDecode(session,Root.ADMINPASSMETHOD);
	}catch(e){
		return false;
	}
}

export const jwt_ed = (string) =>{
	try{
		return jwt.encode(string,Root.ADMINPASSMETHOD);
	}catch(e){
		return false;
	}
}

export const instance = axios.create({
    baseURL: Root.adminurl,
    timeout: 15000,
    headers: {
		// authorization: `${sessioninfor()}`,
      	"Content-Type": "application/json",
    },
});

export const AXIOS_REQUEST =async (url,inputdata) =>{
	try{
		var Response =  await instance.post( url,inputdata)
		if(Response.data){
			if(Response.data.session){
				deleteSession();
				window.location.href="/";
				// window.location.reload()
			}else{
				return Response.data
			}
		}else{
			return {status : false,data : "error"}
		}
	}catch(e){
		return {status : false,data : "error"}
	}
}

export const set_page = (params,rdata)=>{
	let { page, perPage } = params;
	let totalPages = Math.ceil(rdata.data.length / perPage);
	let fdata = [];
	let newparams = {};
	if (page !== undefined && perPage !== undefined) {
		let calculatedPage = (page - 1) * perPage;
		let calculatedPerPage = page * perPage;
	  	if(calculatedPage > rdata.data.length){
			totalPages = Math.ceil(rdata.data.length / perPage);
			fdata = rdata.data.slice(0, perPage);
			newparams['page'] = 0;
			newparams['perPage'] = perPage;
		}else{
			fdata = rdata.data.slice(calculatedPage, calculatedPerPage);
			newparams = params;
		}
	}else {
		totalPages = Math.ceil(rdata.data.length / 7);
		fdata = rdata.data.slice(0, 7);
		newparams = params;
	}
	if(fdata.length === 0){
		newparams['page'] = 0;
		newparams['perPage'] = 7;
		fdata = rdata.data.slice(0, 7);
	}
	return {fdata : fdata,totalPages : totalPages,params : newparams}
}