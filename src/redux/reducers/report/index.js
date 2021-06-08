const initialState = {
    data: [],
    params: null,
    allData: [],
    totalPages: 0,
    filteredData: [],
    totalRecords: 0,
    sortIndex: []
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
  
const ReportReducer = (state = initialState, action) => {
    switch (action.type) {
        case "REPORT_GET_DATA":
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
        case "REPORT_GET_ALL_DATA":
            return {
            ...state,
            allData: action.data,
            totalRecords: action.data.length,
            sortIndex: getIndex(action.data, state.data, state.sortIndex)
            }
        default:
            return state
    }
}
    
  export default ReportReducer
    