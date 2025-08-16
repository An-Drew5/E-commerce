
export default function Error({messages}) {
    if(!messages || messages.length === 0) return null;
    return <ul className="error-messages">
       { messages.map((message, idx) => (
            <li key={idx}>{message}</li>  
        ))}
    </ul>


}