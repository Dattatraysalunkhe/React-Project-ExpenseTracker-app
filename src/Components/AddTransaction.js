import React, { useState,useContext } from 'react'
import { GlobalContext } from '../Context/GlobalState'

function AddTransaction() {

    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const{addTransaction} = useContext(GlobalContext);
     
    function onSubmit(e){
        e.preventDefault();

        const newTransaction ={
            id:Math.floor(Math.random() * 100000000),
            text,
            amount:+amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new Transaction</h3>
            <form id="form"onSubmit={onSubmit} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={text} onChange={(e) => { setText(e.target.value) }} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
                        (negative - expense, positive - income)</label
                    >
                    <input type="number" value={amount} onChange={(e) => { setAmount(e.target.value) }} placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction And Balance</button>
            </form>
        </>
    )
}

export default AddTransaction
