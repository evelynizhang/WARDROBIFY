import React, { useState, useEffect } from "react";


function Shoes() {
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
    <div className="row row-cols-1 row-cols-md-3 g-4">
        {shoes.map(shoe => {
          const u = shoe.url
            return (
              <div key={shoe.href} className="col">
                <div class="card">
                  <img src={u} className="card-img-top" alt="shoe" />
                  <div className="card-body">
                    <h5 className="card-title">{ shoe.manufacturer }</h5>
                    <p className="card-text">{ shoe.color }</p>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
    )
}


export default Shoes;
