window.addEventListener('DOMContentLoaded', async () => {
  const url = 'http://localhost:8080/api/shoes/';


  try {
    const response = await fetch(url);

    if (!response.ok) {
      // Figure out what to do when the response is bad
      console.log("Erroe")
    } else {
      const data = await response.json();

      for (let shoe of data.shoes) {
      // const shoe = data.shoes[3]
      const manufacturerTag = document.querySelector(".card-title")
      manufacturerTag.innerHTML = shoe.manufacturer

      const colorTag = document.querySelector(".card-text")
      colorTag.innerHTML = shoe.color

      const imgTag = document.querySelector(".card-img-top")
      imgTag.src = shoe.url;


      const detailUrl = "http://localhost:8080${shoe.href}"
      const detailResponse = await fetch(detailUrl);
      if (detailResponse.ok) {
        const details = await detailResponse.json();
        console.log(details);
      }
      const imageTag = shoe.url
      console.log(imageTag)
    }
  }} catch (e) {
    // Figure out what to do if an error is raised

  }
});


function Shoes () {
  return (
    <div className="card">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Shoe Manufacturer</h5>
          <p className="card-text">Shoe Color</p>
        </div>
      </div>
  )
}

export default Shoes;
