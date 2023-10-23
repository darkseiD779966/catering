import React from 'react'

import "./contact.css";

import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  name: "",
  email: "",
tel: "",
  message: "",
};
function Contactus() {


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <section id="contactus">
        <div className='pick'>
        <form onSubmit={handleSubmit} className="text-center border border-light p-5" action="#!">
        <p className="carnage h4 mb-4">Contact us</p>
        <img className="karma" src="images/dddd.png" alt="" />

        <input
          type="name"
          id="name"
          autoComplete='off'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-4"
          placeholder="Name"
        />

{errors.name && touched.name ? (
                      <p className="form-error">{errors.name}</p>
                    ) : null}
        <input
          type="email"
          id="email"
          value={values.email}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
          className="form-control mb-4"
          placeholder="E-mail"
        />
        
        {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
<input
          type="tel"
          id="tel"
          className="form-control mb-4"
          placeholder="Phone-Number"
          value={values.tel}
          autoComplete='off'
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        {errors.tel && touched.tel ? (
                      <p className="form-error">{errors.tel}</p>
                    ) : null}
        <div className="form-group">
          <textarea
            className="form-control rounded-0"
            id="message"
            value={values.message}
            autoComplete='off'
            onChange={handleChange}
            onBlur={handleBlur}
            rows="3"
            placeholder="Message"
          ></textarea>
          
          {errors.message && touched.message ? (
                      <p className="form-error1">{errors.message}</p>
                    ) : null}
        </div>

<div className='power'>
        <button className=" car " type="submit">Send Now</button>
        </div>
      </form>
        </div>
    </section>
  
  )
}
export default Contactus;