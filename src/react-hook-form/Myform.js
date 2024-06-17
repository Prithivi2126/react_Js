import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const MyForm = () => {
  const Validation = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid email address"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Validation),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-center  align-items-center vh-100">
        <div className="card w-50 ">
        <div class="card-body my-4">
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
            <input className="form-control " id="email" {...register("email")} />
            <div>{errors.email && <span>{errors.email.message}</span>}</div>
          </div>
          <div className="mt-3">
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyForm;
