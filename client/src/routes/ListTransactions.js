import LineItem from "../components/LineItem";

function ListTransactions() {
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
                        <LineItem />
                        <LineItem />
                        <LineItem />
                    </tbody>
                </table>
                <button type="button" name="delete">Delete</button>
            </div>
        </div>
    )
}

export default ListTransactions;