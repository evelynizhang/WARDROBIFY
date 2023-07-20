import React, { useState, useEffect } from 'react';

function HatList() {
  const [hats, setHats] = useState([]);

  const getHats = async () => {
    const url = 'http://localhost:8090/api/hats/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setHats(data.hats);
    }
  };

  useEffect(() => {
    getHats();
  }, []);

  const handleDelete = async (id) => {
    const hatUrl = `http://localhost:8090/api/hats/${id}/delete/`;
    const fetchConfig = {
      method: 'delete',
    };

    const response = await fetch(hatUrl, fetchConfig);
    if (response.ok) {
      getHats();
    }
  };

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 w-150 h-70">
      {hats.map((hat) => {
        const id = hat.id;
        return (
          <div key={id} className="col">
            <div className="card">
              <img
                src={hat.picture_url}
                className="card-img-top"
                alt="Hat"
                width="20"
                height="300"
              />
              <div className="card-body">
                <h5 className="card-title">{hat.fabric}</h5>
                <p className="card-text">{hat.color}</p>
                <button
                  onClick={() => handleDelete(id)}
                  className="btn btn-primary"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HatList;
