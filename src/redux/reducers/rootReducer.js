import { combineReducers } from "redux"
import customizer from "./customizer/"
import auth from "./auth/"
import paymentGateWay from "./paymentGateWay"
import profileReducers from "./profile/index"
import livecasinolist from "./livecasinolist/index"
import casinolist from "./casinolist/index"
import porkerlist from "./porkerlist/index"
import player from "./player"
import balance from "./balance"
import report from "./report"
import withdraw from "./paymentWithdraw"
import sports from "./sports"
import promotions from "./promotions"
const rootReducer = combineReducers({
  promotions: promotions,
  customizer: customizer,
  auth: auth,
  profile : profileReducers  ,
  livecasinolist : livecasinolist,
  casinolist : casinolist,
  porkerlist : porkerlist,
  paymentGateWay : paymentGateWay,
  report : report,
  player : player,
  withdraw : withdraw,
  balance : balance,
  sports : sports
})

export default rootReducer
