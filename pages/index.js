import React, { useState } from 'react';
import logo from './logo.png';

export default function Signup() {
  const [farmName, setFarmName] = useState('');
  const [address, setAddress] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [headOfHouseName, setHeadOfHouseName] = useState('');
  const [headOfHouseContactNumber, setHeadOfHouseContactNumber] = useState('');
  const [headOfHouseEmailAddress, setHeadOfHouseEmailAddress] = useState('');
  const [medicalAid, setMedicalAid] = useState('');
  const [medicalAidNumber, setMedicalAidNumber] = useState('');
  const [medicalAidPlan, setMedicalAidPlan] = useState('');
  const [mainMemberName, setMainMemberName] = useState('');
  const [identificationNumber, setIdentificationNumber] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicalConditions, setMedicalConditions] = useState('');
  const [chronicMedication, setChronicMedication] = useState('');
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
    setHeadOfHouseName('');
    setHeadOfHouseContactNumber('');
    setHeadOfHouseEmailAddress('');
    setMedicalAid('');
    setMedicalAidNumber('');
    setMedicalAidPlan('');
    setMainMemberName('');
    setIdentificationNumber('');
    setAllergies('');
    setMedicalConditions('');
    setChronicMedication('');
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

  const addCarField = () => {
    setNumberOfCars((prevCount) => prevCount + 1);
    setCars((prevCars) => [...prevCars, { make: '', model: '', color: '', registrationNumber: '' }]);
  };

  return (
    <div className="container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <img src={logo} alt="Logo" className="logo" />
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
        <h3>Number of Residents</h3>
        <input
          type="number"
          min="1"
          value={numberOfResidents}
          onChange={(e) => setNumberOfResidents(parseInt(e.target.value))}
          required
        />

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

        <button type="button" onClick={addResidentField}>
          Add Resident
        </button>

        <h2>Vehicles</h2>
        <h3>Number of Vehicles</h3>
        <input
          type="number"
          min="1"
          value={numberOfCars}
          onChange={(e) => setNumberOfCars(parseInt(e.target.value))}
          required
        />

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

        <button type="button" onClick={addCarField}>
          Add Vehicle
        </button>

        <h2>Medical Details of Residents</h2>
        {/* Include medical details fields for residents */}

        <h2>Main Member Details</h2>
        <h3>Full Name</h3>
        <input type="text" value={mainMemberName} onChange={(e) => setMainMemberName(e.target.value)} required />

        {/* Include other relevant fields for the head member */}

        <h2>Signature of Authorized Person</h2>
        <input type="checkbox" checked={permission} onChange={(e) => setPermission(e.target.checked)} required />
        <label>I give permission for the above information to be provided to emergency services if necessary.</label>

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
