import React from 'react';

const FormField = ({ type, name, placeholder, value, onChange, rows }) => {
  return (
    <div className="form-group text-start mt-2 mb-3">
      {type === 'textarea' ? (
        <textarea
          className="form-control mt-1 card"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={rows}
        />
      ) : (
        <input
          type={type}
          className="form-control mt-1 card"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
