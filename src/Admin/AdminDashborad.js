import { Link,useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus ,faClipboardList,faUsers, faStar} from '@fortawesome/free-solid-svg-icons'
export default function AdminDashboard() {
    
    return(
      
<div className="dash4">
        <div id="dashboard">
            <h1 style={{ color:"hotpink" }}>Admin DashBoard</h1>
            <div id="dash6">
            <div className="dash1">
        <pre>
            <h5> <FontAwesomeIcon icon={faUsers} style={{ height: "80px", width:"50px",color:"black" }} /></h5>
           <h5> <Link  to={'/user'}style={{ height: "50px", width:"50px",color:"grey",textDecoration:"none",fontSize:"18px" ,fontWeight:"bold"}}>Users</Link></h5></pre>
        </div>
        
            <div className="dash1">
                <pre>
           <h5> <FontAwesomeIcon icon={faPlus} style={{ height: "80px", width:"50px",color:"black" }} /></h5>
        <h5><Link to={`/addmenu`} style={{ height: "50px", width:"50px",color:"grey",textDecoration:"none",fontSize:"18px" ,fontWeight:"bold"}}> AddMenu</Link>
        </h5>
        </pre>
        </div>
        <div className="dash1">
        <pre>
            <h5> <FontAwesomeIcon icon={faClipboardList} style={{ height: "80px", width:"50px",color:"black" }} /></h5>
           <h5> <Link  to={'/adminmenu'}style={{ height: "50px", width:"50px",color:"grey",textDecoration:"none",fontSize:"18px" ,fontWeight:"bold"}}>AdminMenu</Link></h5></pre>
        </div>
        <div className="dash1">
        <pre>
            <h5> <FontAwesomeIcon icon={faStar}  style={{ height: "80px", width:"50px",color:"black" }} /></h5>
           <h5> <Link  to={'/viewrate'}style={{ height: "50px", width:"50px",color:"grey",textDecoration:"none",fontSize:"18px" ,fontWeight:"bold"}}>ViewReview</Link></h5></pre>
        </div>
        </div>
        </div>
        </div>       

    );
}