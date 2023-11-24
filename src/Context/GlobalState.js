import React, { createContext, useReducer } from "react";
import Appreducer from './AppReducer'

//initial state
const initialstate = {
    transaction: [
        { id: 1, text: 'Balance', amount: 10 },
       
    ]
}

//create Context
export const GlobalContext =createContext(initialstate)

//Provider Components
export const GlobalProvider = ({children}) =>{
        const [state,dispatch] = useReducer(Appreducer,initialstate)

        //Action 
        function deleteTransaction (id){
            dispatch({
                type:'DELETE_TRANSACTION',
                payload:id
            })
        }

        function addTransaction (transaction){
            dispatch({
                type:'ADD_TRANSACTION',
                payload:transaction
            })
        }

        return (<GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
            }}>
            {children}
        </GlobalContext.Provider>)
}