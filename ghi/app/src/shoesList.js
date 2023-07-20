function ShoesList() {
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
            <tr key={shoe.href}>
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
