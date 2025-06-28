import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/Slice';


export const saveToLocalStorage = (state) =>{
    try{
        localStorage.setItem('appState', JSON.stringify(state));
    }
    catch (err) {
        console.log(err);
    }
}

export const loadToLocalStorage = () =>{
    try{
        const item = JSON.parse(localStorage.getItem('appState'));
        return item ?? undefined;
    }
    catch(err) {
        console.log(err);
    }

}


const persistedState = loadToLocalStorage();


export const Store =  configureStore({
    reducer:{
        data : counterReducer,
        
    },
    preloadedState : persistedState,
})

Store.subscribe(() => saveToLocalStorage(Store.getState()));