function LineItem({ transaction }) {
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <div className="date">{transaction.date}</div>
            </td>
            <td>
                <div className="vendor">{transaction.entity}</div>
            </td>
            <td>
                <div className="amount">{transaction.amount}</div>
            </td>
        </tr>
    )
}

export default LineItem;