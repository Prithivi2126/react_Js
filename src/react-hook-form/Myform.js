import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Validation schema using Yup
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required").min(3, "First name should be at least 3 characters"),
  lastName: yup.string().required("Last name is required").matches(/^[A-Za-z]+$/, "Last name should contain only letters"),
  email: yup.string().required("Email is required").email("Invalid email address")
});

const MyForm = () => {
  const [formData, setFormData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    setFormData([...formData, data]);
    reset();
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="card w-50">
          <div className="card-body ">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mt-3 text-start">
                <label htmlFor="firstName">First Name</label>
                <input className="form-control" id="firstName" {...register("firstName")} />
                <div>
                  {errors.firstName && <span>{errors.firstName.message}</span>}
                </div>
              </div>

              <div className="mt-3 text-start">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" className="form-control" {...register("lastName")} />
                <div>
                  {errors.lastName && <span>{errors.lastName.message}</span>}
                </div>
              </div>

              <div className="mt-3 text-start">
                <label htmlFor="email">Email</label>
                <input className="form-control" id="email" {...register("email")} />
                <div>{errors.email && <span>{errors.email.message}</span>}</div>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {formData.length > 0 && (
        <div className="d-flex justify-content-center align-items-center mt-4 mb-4">
          <div className="card w-100">
            <div className="card-body">
              <h5 className="card-title text-primary">Submitted Data</h5>
              <table className="table mt-4">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index}>
                      <td>{data.firstName}</td>
                      <td>{data.lastName}</td>
                      <td>{data.email}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyForm;
