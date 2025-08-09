export default function Checkout () {
    function checkoutAction (data) {
        // const customerData = Object.fromEntries(data.entries())
        const customerName = data.get('name');
        console.log(customerName)
    }
    return <form action={checkoutAction}>
        <div>
        <h2>Checkout</h2>
        <p>Total Amount: ...</p>
        </div>
        <section className="control">
            
            <label className="label" htmlFor="name">Full Name</label>
            <input className="input" type="text" id="name" />
        

            <label htmlFor="phone_number" className="label">Phone Number</label>
            <input className="input" type="number" id="number"/>
        
        <div className="control-row ">
            <div>
                <label htmlFor="Region" className="label">Region</label>
            <input className="input" type="text" id="region" />
            </div>

            <div>
                <label htmlFor="City" className="label">City</label>
            <input className="input" type="text" id="city" />
            </div>
        </div>
        
            <label htmlFor="landmark" className="label">Nearest Landmark</label>
            <input className="input" type="text" id="landmark" />
        
        </section>
        <div className="checkout-button">
            <button type="button">close</button>
            <button type="submit">Submit Order</button>
        </div>

    </form>
}