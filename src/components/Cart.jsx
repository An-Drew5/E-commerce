export default function Cart (items){
    const totalPrice = items.reduce(
        (acc, item) => acc + item * item.quantity
    )
    const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
    
}