function LineItem() {
    return (
        <tr>
            <td>
                <input type="checkbox" />
            </td>
            <td>
                <div className="date">12/12/12</div>
            </td>
            <td>
                <div className="vendor">Bobberton's Accounting</div>
            </td>
            <td>
                <div className="amount">-$22.22</div>
            </td>
        </tr>
    )
}

export default LineItem;