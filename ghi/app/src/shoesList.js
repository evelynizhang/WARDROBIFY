import React, { useState, useEffect } from "react";


function ShoesList() {
  const[shoes, setShoes] = useState([])

  const getData = async () => {
    const url = "http://localhost:8080/api/shoes/";
    const response = await fetch(url)

    if (response.ok) {
      const data = await response.json()
      setShoes(data.shoes)
    }
  }
  useEffect(() => {
    getData()
  }, [])


  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Manufacturer</th>
          <th>Model name</th>
          <th>Color</th>
        </tr>
      </thead>
      <tbody>
        {shoes.map(shoe => {
          return (
            <tr key={shoe.id}>
              <td>{ shoe.manufacturer }</td>
              <td>{ shoe.model_name }</td>
              <td>{ shoe.color }</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  )
}

export default ShoesList;
