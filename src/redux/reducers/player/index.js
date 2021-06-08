
const initialState = {
    state: false,
    gamedata : null,
    gameurl : null,
    token : null, 
    mode : null, 
    Ratio : null
  }

  const player = (state = initialState, action) => {
    switch (action.type) {
      case "GAME_PLAYER":
        return { ...state,mode:action.mode, gamedata: action.gamedata,token:action.token, state:action.state, gameurl : action.gameurl, Ratio:action.Ratio }
      case "GAME_EXIT":
        return { ...state, state: action.state }
      default:
        return state
    }
  }
  
export default player
  