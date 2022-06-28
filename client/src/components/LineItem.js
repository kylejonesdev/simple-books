import { FaTimes } from 'react-icons/fa';

function LineItem({ transaction, onDelete }) {
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <div className="date">{transaction.date}</div>
            </td>
            <td>
                <div className="payer">{transaction.payer}</div>
            </td>
            <td>
                <div className="receiver">{transaction.receiver}</div>
            </td>
            <td>
                <div className="description">{transaction.description}</div>
            </td>
            <td>
                <div className="amount">{transaction.amount}</div>
            </td>
            <td>
                <div className="btn">
                    <FaTimes onClick = {() => onDelete(transaction._id)} />
                </div>
            </td>
        </tr>
    )
}

export default LineItem;