import { combineReducers } from "redux"
import { document } from "./document"
import { limit } from "./limit"
import { notification } from "./notification"
const profileReducers = combineReducers({
    document,
    limit,
    notification
})

export default profileReducers
