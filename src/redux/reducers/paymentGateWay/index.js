const initialState = {
  PaymentMethod : null,
  PayResultsData : null,
  QpayCheckOutData : null,
  YaarPayCheckOutData : null,
  TransactionHistoryData : null,
  data: [],
  params: null,
  allData: [],
  totalPages: 0,
  filteredData: [],
  totalRecords: 0,
  sortIndex: [],
  PaymentMenuData:[]
}

const getIndex = (arr, arr2, arr3, params = {}) => {
  if (arr2.length > 0) {
    let startIndex = arr.findIndex(i => i.id === arr2[0].id) + 1
    let endIndex = arr.findIndex(i => i.id === arr2[arr2.length - 1].id) + 1
    let finalArr = [startIndex, endIndex]
    return (arr3 = finalArr)
  } else {
    let finalArr = [arr.length - parseInt(params.perPage), arr.length]
    return (arr3 = finalArr)
  }
}

const PaymentGateWayReducer = (state = initialState, action) => {
  switch (action.type) {
    case "PAYMENTMETHOD_DATA":
      return {...state, PaymentMethod: action.data}
    case "PAYMENT_RESULTS_DATA":
      return {...state, PayResultsData: action.data}
    case "PAYMENTMENU_DATA":
      return {...state, PaymentMenuData: action.data}
    case "TRANSACTION_HISTORY_DATA":
      return {...state, TransactionHistoryData: action.data}
    case "PAYMENTGATEWAY_QPAY_CHEKOUT_DATA":
      return {...state, QpayCheckOutData: action.data}
    case "PAYMENTGATEWAY_YAARPAY_CHEKOUT_DATA":
      return {...state, YaarPayCheckOutData: action.data}
    //---------------------
    case "TRANSACTION_HISTORY__GET_DATA":
      return {
        ...state,
        data: action.data,
        totalPages: action.totalPages,
        params: action.params,
        sortIndex: getIndex(
          state.allData,
          action.data,
          state.sortIndex,
          action.params
        )
      }
    case "TRANSACTION_HISTORY__GET_ALL_DATA":
      return {
        ...state,
        allData: action.data,
        totalRecords: action.data.length,
        sortIndex: getIndex(action.data, state.data, state.sortIndex)
      }
    case "TRANSACTION_HISTORY__FILTER_DATA":
      let value = action.value;
      let bool = action.bool + ""
      let filteredData = [];
      if (value.length) {
        filteredData = state.allData.filter(item => {
          let startsWithCondition = false;
          let includesCondition = false;
          var uitem = item[bool] + "";
            startsWithCondition = uitem.toLowerCase().startsWith(value.toLowerCase())
              includesCondition = uitem.toLowerCase().startsWith(value.toLowerCase())
            if (startsWithCondition) {
              return startsWithCondition
            } else if (!startsWithCondition && includesCondition) {
              return includesCondition
            } else return null
          })
          .slice(state.params.page - 1, state.params.perPage)
        return { ...state, filteredData }
      } else {
        filteredData = state.data
        return { ...state, filteredData }
      }
  
      default:
      return state
  }
}
  
export default PaymentGateWayReducer
  