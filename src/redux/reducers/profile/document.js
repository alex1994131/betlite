     
const initialState = {
  values : null,
}

export const document = (state = initialState, action) => {
  switch (action.type) {
    case "DOCUMENT_DATA": {
      return { ...state, values: action.payload }
    }
    default: {
      return state
    }
  } 
}
  
