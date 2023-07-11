import React, { useState } from 'react';

export default function Signup() {
  const [naamVanPlaas, setNaamVanPlaas] = useState('');
  const [adres, setAdres] = useState('');
  const [kontaknommer, setKontaknommer] = useState('');
  const [kontakbesonderhede, setKontakbesonderhede] = useState('');
  const [noodNaam, setNoodNaam] = useState('');
  const [noodKontaknommer, setNoodKontaknommer] = useState('');
  const [hoofVanHuisNaamEnVan, setHoofVanHuisNaamEnVan] = useState('');
  const [hoofVanHuisKontaknommer, setHoofVanHuisKontaknommer] = useState('');
  const [hoofVanHuisEposAdres, setHoofVanHuisEposAdres] = useState('');
  const [mediesefonds, setMediesefonds] = useState('');
  const [mediesefondsNommer, setMediesefondsNommer] = useState('');
  const [mediesefondsPlan, setMediesefondsPlan] = useState('');
  const [hooflidNaamEnVan, setHooflidNaamEnVan] = useState('');
  const [identiteitsnommer, setIdentiteitsnommer] = useState('');
  const [allergiee, setAllergiee] = useState('');
  const [medieseKondisies, setMedieseKondisies] = useState('');
  const [kronieseMedikasie, setKronieseMedikasie] = useState('');
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
    setNaamVanPlaas('');
    setAdres('');
    setKontaknommer('');
    setKontakbesonderhede('');
    setNoodNaam('');
    setNoodKontaknommer('');
    setHoofVanHuisNaamEnVan('');
    setHoofVanHuisKontaknommer('');
    setHoofVanHuisEposAdres('');
    setMediesefonds('');
    setMediesefondsNommer('');
    setMediesefondsPlan('');
    setHooflidNaamEnVan('');
    setIdentiteitsnommer('');
    setAllergiee('');
    setMedieseKondisies('');
    setKronieseMedikasie('');
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
    const updatedResidents = [...residents, { name: '', contactNumber: '', email: '' }];
    setResidents(updatedResidents);
  };

  const addCarField = () => {
    const updatedCars = [...cars, { make: '', model: '', color: '', registrationNumber: '' }];
    setCars(updatedCars);
  };

  return (
    <div className="container">
      <h1>Registrasie</h1>
      <form onSubmit={handleSignup}>
        <h2>Naam van Plaas</h2>
        <input type="text" value={naamVanPlaas} onChange={(e) => setNaamVanPlaas(e.target.value)} required />

        <h2>Adres</h2>
        <input type="text" value={adres} onChange={(e) => setAdres(e.target.value)} required />

        <h2>Kontaknommer</h2>
        <input type="text" value={kontaknommer} onChange={(e) => setKontaknommer(e.target.value)} required />

        <h2>Kontakbesonderhede</h2>
        <textarea value={kontakbesonderhede} onChange={(e) => setKontakbesonderhede(e.target.value)} required />

        <h2>Van Persoon in die Geval van Nood</h2>
        <h3>Naam</h3>
        <input type="text" value={noodNaam} onChange={(e) => setNoodNaam(e.target.value)} required />

        <h3>Kontaknommer</h3>
        <input type="text" value={noodKontaknommer} onChange={(e) => setNoodKontaknommer(e.target.value)} required />

        <h2>Inwoners van Eiendom</h2>
        <h3>Aantal Inwoners</h3>
        <input
          type="number"
          min="1"
          value={numberOfResidents}
          onChange={(e) => setNumberOfResidents(parseInt(e.target.value))}
          required
        />

        {Array.from({ length: numberOfResidents }, (_, index) => (
          <div key={index}>
            <h3>Inwoner {index + 1}</h3>
            <h4>Naam</h4>
            <input
              type="text"
              value={residents[index].name}
              onChange={(e) => handleResidentChange(index, 'name', e.target.value)}
              required
            />

            <h4>Kontaknommer</h4>
            <input
              type="text"
              value={residents[index].contactNumber}
              onChange={(e) => handleResidentChange(index, 'contactNumber', e.target.value)}
              required
            />

            <h4>E-pos Adres</h4>
            <input
              type="email"
              value={residents[index].email}
              onChange={(e) => handleResidentChange(index, 'email', e.target.value)}
              required
            />
          </div>
        ))}

        <button type="button" onClick={addResidentField}>Voeg Inwoner by</button>

        <h2>Voertuie</h2>
        <h3>Aantal Voertuie</h3>
        <input
          type="number"
          min="1"
          value={numberOfCars}
          onChange={(e) => setNumberOfCars(parseInt(e.target.value))}
          required
        />

        {Array.from({ length: numberOfCars }, (_, index) => (
          <div key={index}>
            <h3>Voertuig {index + 1}</h3>
            <h4>Fabrikaat</h4>
            <input
              type="text"
              value={cars[index].make}
              onChange={(e) => handleCarChange(index, 'make', e.target.value)}
              required
            />

            {/* Include other relevant fields for cars */}
          </div>
        ))}

        <button type="button" onClick={addCarField}>Voeg Voertuig by</button>

        <h2>Mediese Besonderhede van Inwoners</h2>
        {/* Include medical details fields for residents */}

        <h2>Besonderhede van Hooflid</h2>
        <h3>Volle Naam en Van</h3>
        <input type="text" value={hooflidNaamEnVan} onChange={(e) => setHooflidNaamEnVan(e.target.value)} required />

        {/* Include other relevant fields for the head member */}
        
        <h2>Handtekening van Gemagtigde Persoon</h2>
        <input type="checkbox" checked={permission} onChange={(e) => setPermission(e.target.checked)} required />
        <label>Ek gee toestemming dat bogenoemde inligting aan nooddienste mag verskaf word indien nodig.</label>

        <button type="submit">Registreer</button>
      </form>
    </div>
  );
}
