import { useEffect, useState } from "react";

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/clients`)
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Clients</h2>
      <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Capacity</th>
            <th>Power Bill</th>
            <th>Status</th>
            <th>Approved</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client._id}>
              <td>{client.name}</td>
              <td>{client.contact}</td>
              <td>{client.capacity}</td>
              <td>{client.powerBill}</td>
              <td>{client.status}</td>
              <td>{client.approved}</td>
              <td>{new Date(client.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;
