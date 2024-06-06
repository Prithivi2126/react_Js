import React, { useState } from 'react';
import FormField from './FormField';
import './employeeform.css';

const EmployeeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    employeeId: '',
    dob: '',
    mobile: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
   
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 mt-2 ">
      <div className=" bg-light ">
        <div className="mx-5 mt-3 mb-3">
          <h2 className=" mb-4 text-primary">Employee Registration Form</h2>
          <form>
       
            <FormField
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormField
              type="text"
              name="employeeId"
              placeholder="Employee ID"
              value={formData.employeeId}
              onChange={handleChange}
            />
            <FormField
              type="date"
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
            <FormField
              type="tel"
              name="mobile"
              placeholder="Mobile No"
              value={formData.mobile}
              onChange={handleChange}
            />
          
            <FormField
              type="textarea"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              rows={4}
            />
            <button type="submit" onClick={handleSubmit} className="btn btn-primary mt-2 btn-rounded">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
