var initdata = {
  userRole: "admin" ,setloginmodal : false, 
  // setuserdropdown : { dropdownclass : "header-user-dropdown-menu dropdown-menu", 
  // dropclassname : "header-dropdown-user nav-item dropdown"
  // },
  isModaldata : {
    bool : false,
    url :''
  }
}
export const login = (state = initdata, action) => {
  switch (action.type) {
    case "LOGIN_WITH_JWT": {
      return { ...state, values: action.payload }
    }
    case "LOGOUT_WITH_JWT": {
      return { ...state, values: action.payload }
    }
    case "SETLOGINPAGE" : {
      return { ...state, setloginpage : action.payload}
    }
    // case "SETUSERDROPDOWN" : {
    //   return { ...state, setuserdropdown : action.payload}
    // }
    // case 'GETBALANCE' :{
    //   return { ...state,balance : action.payload}
    // }
    case 'FPDATA' : {
      return { ...state,
        fpImage : action.data.image,
        fpImage1 : action.data.image2,
        casinoitems : action.data.caisnoitems,
        livecasinoitems : action.data.livecasinoitems,
        FirstpagePaymentMethodImg : action.data.FirstpagePaymentMethodImg,
        FirstpageProviderImg : action.data.FirstpageProviderImg,
        firstpagesettinglogoimg : action.data.firstpagesettinglogoimg,
        firstpagesettingtrackcode : action.data.firstpagesettingtrackcode,
        menuload : action.data.menuload
      }
    }

    case 'FOOTERDATA' :{
      return { ...state,
        favicon : action.data.favicon,
        footertext : action.data.footertext,
        newstext : action.data.newstext,
        quickdata : action.data.quickdata,
        socialdata  :action.data.socialdata,
        title : action.data.title
      }
    }

    case "PROFILE_USER":{
      return {...state,profile_user : action.data}
    }
    case "LIVECASINOSLIDERIMGS" : {
      return {...state,livecasino_images : action.data
      }
    }

    case "CASINOSLIDERIMGS" : {
      return {...state,casino_images : action.data
      }
    }

    case "VIRTUALSLIDERIMGS" :{
      return {...state,virtual_images : action.data
      }
    }
    
    case "POKERSLIDERIMGS" :{
      return {...state,poker_images : action.data
      }
    }
    

    case "PAYDEPOSIT":{
      return {...state,isModaldata : action.data}
    }
    default: {
      return state
    }
  }
}
