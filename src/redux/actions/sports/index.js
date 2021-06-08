import {AXIOS_REQUEST} from "../auth/index"
import {toast} from "react-toastify"
import {Root} from  "../../../authServices/rootconfig";

export const get_sports_lists = () => {
    return async(dispatch,getState) => {
      var rdata = await AXIOS_REQUEST("sports/load_sportslist_admin")
      console.log(rdata);
      if(rdata.status){
          dispatch({ type : "SPORTS_LIST", data: rdata.data.list_data});
      }else{
          toast.error("error");   
      }
      if(Root.socket){
          Root.socket.on("broadcast" , (data) => {
              if(!data.data.status) return;
              var allOddData = getState().sports.odds_data;
              switch(data.key){
                  case "fixturechange":
                      var flag = false;
                      for(var i = 0 ; i < allOddData.length ; i ++){
                          if(allOddData[i].event_id === data.data.event_id){
                              allOddData[i].event_name = data.data.event_name
                              allOddData[i].sportid = data.data.sportid
                              allOddData[i].ScheduledTime = data.data.ScheduledTime
                              allOddData[i].ScheduledEndTime = data.data.ScheduledEndTime
                              allOddData[i].EventStatus = data.data.EventStatus
                              allOddData[i].BookingStatus = data.data.BookingStatus
                              allOddData[i].Status = data.data.Status
                              allOddData[i].Venue = data.data.Venue
                              allOddData[i].HomeCompetitor = data.data.HomeCompetitor
                              allOddData[i].AwayCompetitor = data.data.AwayCompetitor
                              allOddData[i].Season = data.data.Season
                              flag = true;
                              break;
                          }
                      }
                      if(!flag){
                          allOddData.push(data.data);
                      }
                      dispatch({ type : "SPORTS_ODDS", data : allOddData});
                      if(getState().sports.selectedSport){
                          dispatch(get_odds_(getState().sports.selectedSport));
                      }
                      break;
    
                  case "oddschange":
                      var flag = false;
                      for(var i = 0 ; i < allOddData.length ; i ++){
                          if(allOddData[i].event_id === data.data.event_id){
                              allOddData[i].event_name = data.data.event_name
                              allOddData[i].sportid = data.data.sportid
                              allOddData[i].ScheduledTime = data.data.ScheduledTime
                              allOddData[i].ScheduledEndTime = data.data.ScheduledEndTime
                              allOddData[i].EventStatus = data.data.EventStatus
                              allOddData[i].BookingStatus = data.data.BookingStatus
                              allOddData[i].Status = data.data.Status
                              allOddData[i].Venue = data.data.Venue
                              allOddData[i].HomeCompetitor = data.data.HomeCompetitor
                              allOddData[i].AwayCompetitor = data.data.AwayCompetitor
                              allOddData[i].Season = data.data.Season
                              allOddData[i].market = data.data.market
                              flag = true;
                              break;
                          }
                      }
                      if(!flag){
                          allOddData.push(data.data);
                      }
                      dispatch({ type : "SPORTS_ODDS", data : allOddData});
                      if(getState().sports.selectedSport){
                          dispatch(get_odds_(getState().sports.selectedSport));
                      }
                      break;
    
                  case "betstop":
                      var flag = false;
                      for(var i = 0 ; i < allOddData.length ; i ++){
                          if(allOddData[i].event_id === data.data.event_id){
                              allOddData[i].MarketStatus = "Suspended";
                              flag = true;
                              break;
                          }
                      }
                      dispatch({ type : "SPORTS_ODDS", data : allOddData});
                      if(getState().sports.selectedSport){
                          dispatch(get_odds_(getState().sports.selectedSport));
                      }
                      break;
    
                  case "betsettlement":
                      var flag = false;
                      var tempData = [];
                      for(var i = 0 ; i < allOddData.length ; i ++){
                          if(allOddData[i].event_id !== data.data.event_id){
                            tempData.push(allOddData[i]);
                          }
                      }
                      dispatch({ type : "SPORTS_ODDS", data : tempData});
                      if(getState().sports.selectedSport){
                          dispatch(get_odds_(getState().sports.selectedSport));
                      }
                      break;
              
                  default :
                      break;
              }
          })
      }
    }
  }
  
export const  get_sports_listsa = ()=>{
    return async (dispatch,getState) => {
        var rdata = await AXIOS_REQUEST("sports/load_sportsdata_player")
        if(rdata.status){
            dispatch({ type : "SPORTS_LIST", data: rdata.data.list_data});
            dispatch({ type : "SPORTS_ODDS", data : rdata.data.odds_data});
        }else{
            toast.error(rdata.data);   
        }
    }
}

export const get_odds = ( Item ) =>{
    return async (dispatch,getState) => {
        dispatch({ type : "SELECTED_SPORT", data: Item});
        dispatch({ type : "SEARCH_SPORTS_ODDS", data: []});

        var currentPage = window.location.pathname.split("/")[1];
        var EventStatus = currentPage === "Inplay" ? "Live" : "NotStarted";
        EventStatus = currentPage !== "sports" ? EventStatus : "Sports";

        var data = {
            sportid : Item.sport_id,
            EventStatus : EventStatus
        }
        var rdata = await AXIOS_REQUEST("sports/load_sportsodds_bysportid_player" , data );

        if(rdata.status){
            var allOddData = rdata.data.odds_data;
            dispatch(get_odds_(allOddData));
        }else{            
            toast.error(rdata.data);   
        }
    }
}

export const get_odds_ = (allOddData) => {
    return async(dispatch , getState) => {
        var firstSearchData = [];      
                                                                 // sport type choice
        var currentPage = window.location.pathname.split("/")[1];
        var EventStatus = currentPage === "Inplay" ? "Live" : "NotStarted";
        EventStatus = currentPage !== "sports" ? EventStatus : "Sports";

        switch(currentPage){
            case "Inplay" :
                for(var y = 0 ; y < allOddData.length ; y ++){
                    if(allOddData[y].Status.EventClock){
                        if(allOddData[y].Status.EventClock.EventTime){
                            allOddData[y].ScheduledTime = allOddData[y].Status.EventClock.EventTime;
                        }    
                    }
                    firstSearchData.push(allOddData[y]);
                }
                break;

            case "Upcoming" :
                firstSearchData = allOddData;
                break;

            case "sports" :
                for(var x = 0 ; x < allOddData.length ; x ++){
                    if(allOddData[x].EventStatus !== "Closed"){
                        if(allOddData[x].Status.EventClock){
                            allOddData[x].ScheduledTime = allOddData[x].Status.EventClock;
                        }
                        firstSearchData.push(allOddData[x]);
                    }
                }
                break;

            default :
                break;
        }

        var secondSearchData = [];                                                              //season choice
        for(var a = 0 ; a < firstSearchData.length ; a ++){
            var flag = false;
            for(var b = 0 ; b < secondSearchData.length ; b ++){
                if(firstSearchData[a].Season){
                    if(firstSearchData[a].Season.Id === secondSearchData[b].id){
                        secondSearchData[b].data.push(handleMarket(firstSearchData[a]));
                        flag = true;
                        break;
                    }
                }
            }
            if(!flag){
                var temp = {};
                if(firstSearchData[a].Season){
                    temp.id = firstSearchData[a].Season.Id;
                    temp.name = (firstSearchData[a].Venue ? firstSearchData[a].Venue.country + " - " : "") + (firstSearchData[a].Season.Name ? firstSearchData[a].Season.Name : firstSearchData[a].HomeCompetitor.Name + " : " + firstSearchData[a].AwayCompetitor.Name);
                    temp.data = [handleMarket(firstSearchData[a])];
                    secondSearchData.push(temp);
                }else{
                    temp.id = firstSearchData[a].event_id;
                    temp.name = (firstSearchData[a].Venue ? firstSearchData[a].Venue.country + " - " : "") + (firstSearchData[a].HomeCompetitor.Name + " - " + firstSearchData[a].AwayCompetitor.Name);
                    temp.data = [handleMarket(firstSearchData[a])];
                    secondSearchData.push(temp);
                }
            }
        }

        dispatch({ type : "SEARCH_SPORTS_ODDS", data: secondSearchData});
    }
}

export const getSelectedItem = (data)=>{
    return async (dispatch , getState) =>{
        var event_id = data.event_id;
        var allOddData = getState().sports.odds_data;
        var selectedData = allOddData.filter(item => item.event_id === event_id);
        dispatch({ type : "SELECTED_GAME_OUTCOMES", data: selectedData});
    }
}


export const setItem = (data)=>{
    return async (dispatch , getState) =>{
        let rdata = get(getState().sports.sportsSidebarData.data,data);
        dispatch({ type : "SPORTS_SIDEBAR_SET_ITEM", data: {data : rdata}});
    }
}

export const removeItem = (data)=>{
    return async (dispatch , getState) =>{
        let rdata = remove(getState().sports.sportsSidebarData.data,data);
        dispatch({ type : "SPORTS_SIDEBAR_SET_ITEM", data: {data : rdata}});
    }
}

export const removeAllItem = ()=>   {
    return async (dispatch) =>{
        dispatch({ type : "SPORTS_SIDEBAR_SET_ITEM", data: { data : []}});
    }
}

export const placeBet = (sendData) => {
    return async (dispatch , getState) => {
        var result = await AXIOS_REQUEST("sports/place_bet" , sendData)
        console.log(result);
        if(result.status){
            dispatch(removeAllItem());
            var balanceData = getState().balance.value;
            balanceData.balance = result.balance;
            dispatch({
                type : "GETBALANCE",
                data : balanceData
            })
            toast.success("Successfuly bet!");
        }
    }
}

function remove(p1, p2){
    let sdata = [];
    sdata = p1;
    var index = sdata.findIndex(data => data.OutcomeId === p2.OutcomeId && data.OutcomeName === p2.OutcomeName);
    sdata.splice(index, 1)
    return sdata;
}

function get(p1, p2){
    let sdata = [];
    sdata = p1;
    var index = sdata.findIndex(data => data.OutcomeId === p2.OutcomeId && data.OutcomeName === p2.OutcomeName);
    if(index>-1){
        sdata.splice(index, 1)
    }else{
        sdata.push(p2);
    }
    return sdata;
}

function handleMarket(data){
    var pushData = data;
    pushData.oneTotwo = {}
    pushData.handicap = {}
    pushData.total = {}

    if(pushData.market){
        if(pushData.market.length){
            for(var f = pushData.market.length-1 ;f >= 0 ; f --){
                if(pushData.market[f].MarketName.toLowerCase() === "1x2"){
                    if(!pushData.market[f].Outcomes) break;
                    if(!pushData.market[f].Outcomes.length) break;
                    pushData.oneTotwo.one = parseFloat(pushData.market[f].Outcomes[0].OutcomeOdds).toFixed(2);
                    pushData.oneTotwo.draw = parseFloat(pushData.market[f].Outcomes[1].OutcomeOdds).toFixed(2);
                    pushData.oneTotwo.two = parseFloat(pushData.market[f].Outcomes[2].OutcomeOdds).toFixed(2);
                    break;
                }
            }

            for(var f = pushData.market.length-1 ;f >= 0 ; f --){
                if(pushData.market[f].MarketName.toLowerCase() === "handicap"){
                    if(!pushData.market[f].Outcomes) break;
                    if(!pushData.market[f].Outcomes.length) break;
                    pushData.handicap.one = parseFloat(pushData.market[f].Outcomes[0].OutcomeOdds).toFixed(2);
                    pushData.handicap.two = parseFloat(pushData.market[f].Outcomes[1].OutcomeOdds).toFixed(2);
                    pushData.handicap.spec = parseFloat(pushData.market[f].MarketSpecifiers.slice(4,pushData.market[f].MarketSpecifiers.length)).toFixed(2)
                    break;
                }
            }

            for(var f = pushData.market.length-1 ;f >= 0 ; f --){
                if(pushData.market[f].MarketName.toLowerCase() === "total"){
                    if(!pushData.market[f].Outcomes) break;
                    if(!pushData.market[f].Outcomes.length) break;
                    pushData.total.one = parseFloat(pushData.market[f].Outcomes[0].OutcomeOdds).toFixed(2);
                    pushData.total.two = parseFloat(pushData.market[f].Outcomes[1].OutcomeOdds).toFixed(2);
                    pushData.total.spec = parseFloat(pushData.market[f].MarketSpecifiers.slice(6,pushData.market[f].MarketSpecifiers.length)).toFixed(2)
                    break;
                }
            }
        }
    }
    return pushData;
}