import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ViewRating() {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = async () => {
    const result = await axios.get("http://localhost:8080/review");
    setLists(result.data);
  };



  return (
    <div className="Admenu" style={{ height: "95vh" }}>
        
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Feddback</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                
                <td>{list.name}</td>
                <td>{list.feedback}</td>
               
                  
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
