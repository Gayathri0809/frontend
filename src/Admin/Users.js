import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import"./Login.css";
export default function Users() {
    const [lists, setLists] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const result = await axios.get("http://localhost:8080/registers");
    setLists(result.data);
  };

  
  return (
    <div className="Admenu">
        
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
              
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
               
                
                <td>{list.email}</td>
                <td>{list.name}</td>
                <td>{list.phone}</td>
                <td>
                 
                  
                 
                </td>
                  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}