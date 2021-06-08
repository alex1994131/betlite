export const limit = (state = {}, action) => {
    switch (action.type) {
      case "DEPOSIT_LIMIT": {
        return { ...state, deposit: action.payload }
      }
     
      default: {
        return state
      }
    }
  }
  