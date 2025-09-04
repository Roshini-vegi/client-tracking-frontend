import { useState } from "react";

function AddClient({ onClientAdded }) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [capacity, setCapacity] = useState("");
  const [powerBill, setPowerBill] = useState("");
  const [status, setStatus] = useState("Active");
  const [approved, setApproved] = useState("Yes");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newClient = { name, contact, capacity, powerBill, status, approved, date: new Date() };

    fetch("http://localhost:5000/clients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient),
    })
      .then((res) => res.json())
      .then((data) => {
        onClientAdded(data); // Update table
        // Clear form
        setName("");
        setContact("");
        setCapacity("");
        setPowerBill("");
        setStatus("Active");
        setApproved("Yes");
      })
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add New Client</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
      <input type="number" placeholder="Capacity" value={capacity} onChange={(e) => setCapacity(e.target.value)} required />
      <input type="number" placeholder="Power Bill" value={powerBill} onChange={(e) => setPowerBill(e.target.value)} required />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>Active</option>
        <option>Inactive</option>
      </select>
      <select value={approved} onChange={(e) => setApproved(e.target.value)}>
        <option>Yes</option>
        <option>No</option>
      </select>
      <button type="submit">Add Client</button>
    </form>
  );
}

export default AddClient;
