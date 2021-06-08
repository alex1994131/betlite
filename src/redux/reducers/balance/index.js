
const initialState = {
    value  :{
        balance  :0
    }
  }

  const player = (state = initialState, action) => {
    switch (action.type) {
      case "GETBALANCE":
        return { ...state,value : action.data}
      default:
        return state
    }
  }
  
export default player