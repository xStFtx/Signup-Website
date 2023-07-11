import React, { useState } from 'react';
import logo from './logo.png';

export default function Signup() {
  const [farmName, setFarmName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [mainMemberName, setMainMemberName] = useState('');
  const [mainMemberID, setMainMemberID] = useState('');
  const [permission, setPermission] = useState(false);
  const [numberOfResidents, setNumberOfResidents] = useState(1);
  const [numberOfCars, setNumberOfCars] = useState(1);
  const [residents, setResidents] = useState([{ name: '', contactNumber: '', email: '' }]);
  const [cars, setCars] = useState([{ make: '', model: '', color: '', registrationNumber: '' }]);

  const handleSignup = (e) => {
    e.preventDefault();

    // Perform form validation and submit data to the server
    // ...

    // Reset the form
    setFarmName('');
    setAddress('');
    setContactNumber('');
    setContactDetails('');
    setEmergencyContactName('');
    setEmergencyContactNumber('');
    setMainMemberName('');
    setMainMemberID('');
    setPermission(false);
    setNumberOfResidents(1);
    setNumberOfCars(1);
    setResidents([{ name: '', contactNumber: '', email: '' }]);
    setCars([{ make: '', model: '', color: '', registrationNumber: '' }]);
  };

  const handleResidentChange = (index, field, value) => {
    const updatedResidents = [...residents];
    updatedResidents[index][field] = value;
    setResidents(updatedResidents);
  };

  const handleCarChange = (index, field, value) => {
    const updatedCars = [...cars];
    updatedCars[index][field] = value;
    setCars(updatedCars);
  };

  const addResidentField = () => {
    setNumberOfResidents((prevCount) => prevCount + 1);
    setResidents((prevResidents) => [...prevResidents, { name: '', contactNumber: '', email: '' }]);
  };

  const removeResidentField = () => {
    if (numberOfResidents > 1) {
      setNumberOfResidents((prevCount) => prevCount - 1);
      setResidents((prevResidents) => prevResidents.slice(0, prevResidents.length - 1));
    }
  };

  const addCarField = () => {
    setNumberOfCars((prevCount) => prevCount + 1);
    setCars((prevCars) => [...prevCars, { make: '', model: '', color: '', registrationNumber: '' }]);
  };

  const removeCarField = () => {
    if (numberOfCars > 1) {
      setNumberOfCars((prevCount) => prevCount - 1);
      setCars((prevCars) => prevCars.slice(0, prevCars.length - 1));
    }
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>Registration</h1>
      <form onSubmit={handleSignup}>
        <h2>Farm Name</h2>
        <input type="text" value={farmName} onChange={(e) => setFarmName(e.target.value)} required />

        <h2>Address</h2>
        <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <h2>Contact Number</h2>
        <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} required />

        <h2>Contact Details</h2>
        <textarea value={contactDetails} onChange={(e) => setContactDetails(e.target.value)} required />

        <h2>Emergency Contact Person</h2>
        <h3>Name</h3>
        <input type="text" value={emergencyContactName} onChange={(e) => setEmergencyContactName(e.target.value)} required />

        <h3>Contact Number</h3>
        <input
          type="text"
          value={emergencyContactNumber}
          onChange={(e) => setEmergencyContactNumber(e.target.value)}
          required
        />

        <h2>Residents of the Property</h2>
        <h2>Main Member Details</h2>
        <h3>Full Name</h3>
        <input type="text" value={mainMemberName} onChange={(e) => setMainMemberName(e.target.value)} required />

        <h3>ID Number</h3>
        <input type="text" value={mainMemberID} onChange={(e) => setMainMemberID(e.target.value)} required />

        <h2>Signature of Authorized Person</h2>
        <input type="checkbox" checked={permission} onChange={(e) => setPermission(e.target.checked)} required />
        <label>I give permission for the above information to be provided to emergency services if necessary.</label>
        {Array.from({ length: numberOfResidents }, (_, index) => (
          <div key={index}>
            <h3>Resident {index + 1}</h3>
            <h4>Name</h4>
            <input
              type="text"
              value={residents[index].name}
              onChange={(e) => handleResidentChange(index, 'name', e.target.value)}
              required
            />

            <h4>Contact Number</h4>
            <input
              type="text"
              value={residents[index].contactNumber}
              onChange={(e) => handleResidentChange(index, 'contactNumber', e.target.value)}
              required
            />

            <h4>Email Address</h4>
            <input
              type="email"
              value={residents[index].email}
              onChange={(e) => handleResidentChange(index, 'email', e.target.value)}
              required
            />
          </div>
        ))}

        <div>
          <button type="button" onClick={addResidentField}>
            Add Resident
          </button>
          {numberOfResidents > 1 && (
            <button type="button" onClick={removeResidentField}>
              Remove Resident
            </button>
          )}
        </div>

        <h2>Vehicles</h2>

        {Array.from({ length: numberOfCars }, (_, index) => (
          <div key={index}>
            <h3>Vehicle {index + 1}</h3>
            <h4>Make</h4>
            <input
              type="text"
              value={cars[index].make}
              onChange={(e) => handleCarChange(index, 'make', e.target.value)}
              required
            />

            {/* Include other relevant fields for cars */}
          </div>
        ))}

        <div>
          <button type="button" onClick={addCarField}>
            Add Vehicle
          </button>
          {numberOfCars > 1 && (
            <button type="button" onClick={removeCarField}>
              Remove Vehicle
            </button>
          )}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
