import React, {useState, useEffect} from 'react';

function ShoeForm() {
  const [bins, setBins] = useState([])
  const [formData, setFormData] = useState({
    manufacturer: '',
    color: '',
    url: '',
    model_name: '',
    bin:'',
  })

  const getData = async () => {
    const url = 'http://localhost:8100/api/bins/';
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      setBins(data.bins);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const shoeUrl = 'http://localhost:8080/api/shoes/'

    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(shoeUrl, fetchConfig);
    if (response.ok) {
      setFormData({
        manufacturer: '',
        color: '',
        url: '',
        model_name: '',
        bin:'',
      });
    }
  }

  const handleFormChange = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    setFormData({
      //Previous form data is spread (i.e. copied) into our new state object
      ...formData,

      //On top of the that data, we add the currently engaged input key and value
      [inputName]: value
    });
  }

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new pair of shoes</h1>
          <form onSubmit={handleSubmit} id="create-shoe-form">
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.manufacturer} placeholder="Manufacturer" required type="text" name="manufacturer" id="manufacturer" className="form-control" />
              <label htmlFor="manufacturer">Manufacturer</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.model_name} placeholder="Model Name" required type="text" name="model_name" id="model_name" className="form-control" />
              <label htmlFor="model_name">Model Name</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.color} placeholder="Color" required type="text" name="color" id="color" className="form-control" />
              <label htmlFor="color">Color</label>
            </div>
            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.url} placeholder="Url" required type="text" name="url" id="url" className="form-control" />
              <label htmlFor="url">Url</label>
            </div>
            <div className="mb-3">
              <select onChange={handleFormChange} value={formData.bin} required name="bin" id="bin" className="form-select">
                <option value="">Choose a bin</option>
                {bins.map(bin => {
                  return (
                    <option key={bin.id} value={bin.href}>{bin.closet_name}</option>
                  )
                })}
              </select>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ShoeForm;
