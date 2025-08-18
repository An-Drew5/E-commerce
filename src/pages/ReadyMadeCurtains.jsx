import { Link } from "react-router-dom";
import { blindsImages } from "../util/productImages";

export default function ReadyMadeCurtainsPage() {
  return (
    <>
      <h1>Welcome to Ready-madeCurtains page</h1>
      //
      {/* <ul>
        {blindsImages.map(image => (
            <li key={image.id}><Link to={`/productImages/${image.id}`}></Link></li>
        ))}
      </ul> */}
    </>
  );
}
