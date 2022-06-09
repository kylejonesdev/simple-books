import { Link, Outlet } from "react-router-dom";

function App () {
    return (
        <div className="menu">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/new-transaction">New Transaction</Link>
                <Link to="/list-transactions">List Transactions</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default App;