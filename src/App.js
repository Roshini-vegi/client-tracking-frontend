import { useState, useEffect } from "react";
import ClientList from "./ClientList";
import AddClient from "./AddClient";

function App() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/clients")
      .then((res) => res.json())
      .then((data) => setClients(data))
      .catch((err) => console.error(err));
  }, []);

  const handleClientAdded = (newClient) => {
    setClients([...clients, newClient]);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Client Tracking</h1>
      <AddClient onClientAdded={handleClientAdded} />
      <ClientList clients={clients} />
    </div>
  );
}

export default App;
