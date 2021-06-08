
const initialState = {
    sports_list : [],
    odds_data : [],
    sportsSidebarData : {
        data : [] 
    }
  }

  

  const player = (state = initialState, action) => {
    switch (action.type) {
        case "SPORTS_LIST":
            return { ...state,sports_list : action.data }
            
        case "SPORTS_ODDS" :
            return { ...state,odds_data : action.data} 

        case "SEARCH_SPORTS_ODDS" :
            return { ...state,search_odds_data : action.data} 

        case "SELECTED_GAME_OUTCOMES" : 
            return { ...state,select_outcomes_data : action.data} 
        case "SPORTS_SIDEBAR_SET_ITEM" :
            return { ...state, sportsSidebarData : action.data }
        case "SELECTED_SPORT" : 
            return { ...state, selectedSport : action.data }
        default:
            return state
    }
  }
  
export default player
  
