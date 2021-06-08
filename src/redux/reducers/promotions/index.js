const initialState = {
    BonusData : null,
    Wagered : 0,
}
  
  const promstions = (state = initialState, action) => {
    switch (action.type) {
      case "PROMOTIONS_BONUS_DATA":
        return {...state, BonusData: action.payload}
      case "PROMOTIONS_BONUS_DATA_WAGERED":
        return {...state, Wagered: action.payload}
      default:
        return state
    }
  }
    
  export default promstions
    