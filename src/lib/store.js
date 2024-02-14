import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector} from "react-redux";
import rootReducer from "./reducers/Combiner"

export const makeStore =()=>{
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck:false}),
    devTools:true
  })
}



export const useAppDispatch = ()=> useDispatch();
export const useAppSelector = useSelector;
