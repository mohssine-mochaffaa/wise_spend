import React, { useState } from 'react';
import "./AddProject.css"

const AddProjectForm = ({setShow}) => {
  // State hooks for form values
  const [title, setTitle] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState('');
  const [budget, setBudget] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const projectData = {
      title,
      address,
      date,
      phone,
    };

    // Here, you would typically send `projectData` to your server or handle it further.
    console.log('New Project:', projectData);

    // Optionally reset the form
    setTitle('');
    setAddress('');
    setDate('');
    setBudget('');
  };

  return (
    <div className="form-container">
    <p onClick={()=> setShow(false)} className='cancel'>X</p>
      <h1>Add Projet</h1>
      <form onSubmit={handleSubmit} id="projectForm">
        <div className="form-group">
          <label htmlFor="title">Project title:</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Entrez le titre"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Adress :</label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Entrez l'adresse"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date :</label>
          <input
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone">monthly Budget:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Entrez le budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddProjectForm;
