function NewTransaction() {
    return (
        <div>
            <h2>Add New Transaction</h2>
            <label>
                <p>Payer</p>
                <input type="text" placeholder="Payer Name" />
                <button type="button" name="add-customer">Add Customer</button>
            </label>
            <label>
                <p>Receiver</p>
                <input type="text" placeholder="Receiver Name" />
                <button type="button" name="add-vendor">Add Vendor</button>
            </label>
            <label>
                <p>Date</p>
                <input type="date" />
            </label>
            <label>
                <p>Amount</p>
                <input type="number" />
            </label>
            <button type="button" name="confirm">Confirm</button>
            <button type="button" name="cancel">Cancel</button>
        </div>
    )
}

export default NewTransaction;