export const notification = (state = {}, action) => {
    switch (action.type) {
      case "NOTIFICATION": {
        return { ...state, notify: action.payload }
      }
     
      default: {
        return state
      }
    }
  }
  