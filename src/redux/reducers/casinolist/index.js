import {CASINO_PROVIDER,CASINO_TYPES,CASINO_GET_ALL_DATA, CASINO_GET_DATA,CASINO_FILTER_DATA,CASINO_TYPE,CASINO_SETPROVIDER} from "../../types"

const initialState = {
    data: [],
    allData: [],
    filteredData: [],
    providerData : [],
    types : [],
    settype : {name : "All",value : 'All'},
    setprovider : {name : "All",value : 'All'},
    moredata : []
  }
  
  const DataListReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case CASINO_GET_ALL_DATA:
        return {
          ...state,
          allData: action.data,
          data : action.data
        }
        case CASINO_GET_DATA:
        return {
          ...state,
          data: action.data,
        }
      case CASINO_FILTER_DATA:
        let value = action.value;
        let filteredData = []
        if (value.length) {
          filteredData = state.allData
            .filter(item => {
              let startsWithCondition =
                item.NAME.toLowerCase().startsWith(value.toLowerCase()) 

              let includesCondition =
                item.NAME.toLowerCase().includes(value.toLowerCase()) 
  
              if (startsWithCondition) {
                return startsWithCondition
              } else if (!startsWithCondition && includesCondition) {
                return includesCondition
              } else return null
            })
          return { ...state, filteredData }
        } else {
          filteredData = state.data
          return { ...state, filteredData }
        }

      case CASINO_TYPES:
      return {...state,types : action.data }
      case CASINO_TYPE:
      return {...state,settype : action.data }
      case CASINO_SETPROVIDER :
        return {...state,setprovider : action.setprovider}
      case CASINO_PROVIDER :
        return {...state,providerData : action.data,moredata : action.moredata,setprovider : action.data[1]}
      default:
        return state
    }
  }
  
  export default DataListReducer
  