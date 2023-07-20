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
    <div className="row row-cols-1 row-cols-md-3 g-4 w-150 h-70">
        {shoes.map(shoe => {
          const u = shoe.url
          console.log(u)
          const id = shoe.id
            return (
              <div key={id} className="col">
                <div className="card">
                  <img src={u} className="card-img-top" alt="shoe" width="20" height="300" />
                  <div className="card-body">
                    <h5 className="card-title">{ shoe.manufacturer }</h5>
                    <p className="card-text">{ shoe.color }</p>
                    <a href="http://localhost:8080/api/shoes/${id}" className="btn btn-primary">Delete</a>
                  </div>
                </div>
              </div>
            );
          })}
    </div>
    )
}


export default Shoes;
