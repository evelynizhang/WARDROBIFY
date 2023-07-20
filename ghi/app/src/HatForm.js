import React, { useState, useEffect } from 'react';

function HatForm() {
  const [formData, setFormData] = useState({
    fabric: '',
    style_name: '',
    color: '',
    picture_url: '',
    wardrobe_location: '',
  });
  const [wardrobeLocations, setWardrobeLocations] = useState([]);

  const getWardrobeLocations = async () => {
    const url = 'http://localhost:8100/api/locations/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setWardrobeLocations(data.locations); // Assuming the API returns an array of wardrobe locations
    }
  };

  useEffect(() => {
    getWardrobeLocations();

  }, []);
console.log(wardrobeLocations);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const hatUrl = 'http://localhost:8090/api/hats/';
      const fetchConfig = {
        method: 'post',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const response = await fetch(hatUrl, fetchConfig);
      console.log(response);

      if (response.ok) {
        setFormData({
          fabric: '',
          style_name: '',
          color: '',
          picture_url: '',
          wardrobe_location: '',
        });
        alert('Hat created successfully!');
      } else {
        alert('Failed to create hat. Please try again.');
      }
    } catch (error) {
      console.error('Error creating hat:', error);
      alert('An error occurred. Please try again.');
    }
  };




  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="row">
      <div className="col-12 col-md-6 offset-md-3 mt-4">
        <div className="shadow p-4">
          <h1>Create a New Hat</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="fabric"
                name="fabric"
                value={formData.fabric}
                onChange={handleFormChange}
                required
                className="form-control"
              />
              <label htmlFor="fabric">Fabric</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="style_name"
                name="style_name"
                value={formData.style_name}
                onChange={handleFormChange}
                required
                className="form-control"
              />
              <label htmlFor="style_name">Style Name</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="color"
                name="color"
                value={formData.color}
                onChange={handleFormChange}
                required
                className="form-control"
              />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="picture_url"
                name="picture_url"
                value={formData.picture_url}
                onChange={handleFormChange}
                required
                className="form-control"
              />
              <label htmlFor="picture_url">Picture URL</label>
            </div>
            <div className="form-floating mb-3">
              <input
                type="text"
                id="wardrobe_location"
                name="wardrobe_location"
                value={formData.wardrobe_location}
                onChange={handleFormChange}
                required
                className="form-control"
              />
              <label htmlFor="wardrobe_location">Wardrobe Location</label>
            </div>
            <button type="submit" className="btn btn-primary">Create Hat</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HatForm;
