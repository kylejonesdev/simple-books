import React, { useEffect, useState } from "react";
import LineItem from "../components/LineItem";

function ListTransactions() {
    const [transactions, setTransactions] = useState([]);    
    useEffect(()=> {
        async function getTransactions() {
            const response = await fetch('http://localhost:3000/api/transactions');
            if(!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const transactions = await response.json();
            setTransactions(transactions);
        }
        getTransactions();
        return;
    }, [transactions.length]);

    function transactionsList() {
        return transactions.map((item) => {
            return <LineItem transaction = {item} />
        })
    }
    return (
        <div>
            <h2>Bobberton's Contracting Inc.</h2>
            <img href="#" alt="Avatar" />
            <p>Bobbert</p>
            <div className="transactions-wrapper">
                <h2>Transaction List</h2>
                <button type="button" name="add-new-transaction">Add New</button>
                <table>
                    <thead>
                        <tr>
                            <th>Select</th>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsList()}
                    </tbody>
                </table>
                <button type="button" name="delete">Delete</button>
            </div>
        </div>
    )
}

export default ListTransactions;