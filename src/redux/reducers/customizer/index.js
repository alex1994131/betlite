import { combineReducers } from "redux"
import customizer from "./customizer"
import horizontalconfig from "./horizontalconfig"

const customizerReducer = combineReducers({
  customizer,
  horizontalconfig
})

export default customizerReducer
