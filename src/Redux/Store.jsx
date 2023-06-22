import reducer from "./Reducer/Reducers"
import { createStore } from "redux"

export const store = createStore(reducer);