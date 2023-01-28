import React from 'react';
import { useFormik } from 'formik';
import axios from "axios"
import * as Yup from "yup"
import "./Add.css"
const Add = () => {

  const formik = useFormik({
    initialValues: {
      name: '',
      pos: "",
      image : "",
      desc :""
    },
    validationSchema: Yup.object({
        name: Yup.string().required("Required"),
        pos: Yup.string().required("Required"),
        desc: Yup.string().required("Required"),
        image: Yup.string().required("Required"),
}),
    onSubmit: (values) => {
      axios.post("http://localhost:8080/api/customers"  , values).then((res) =>console.log(res.data))
    },
  });
  return (
    <div className='addcustomerdiv'>
        <div className='addcustomer'>

        <form onSubmit={formik.handleSubmit}>
            <div id="inputcontent"><h2>Add Customer</h2></div>
      <div id="inputs">
      <input
        name="name" type="text" placeholder="Customer's Name" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
      </div>

      <div id="inputs">
      <input
        name="pos" type="text" placeholder="Customer's Position" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.pos}
      />
      {formik.touched.pos && formik.errors.pos ? <p>{formik.errors.pos}</p> : null}
      </div>

      <div id="inputs">
      <input
        name="image" type="text" placeholder="Customer's Image" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.image}
      />
      {formik.touched.image && formik.errors.image ? <p>{formik.errors.image}</p> : null}
      </div>

      <div id="inputs">
      <input
        name="desc" type="text" placeholder="Description" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.desc}
      />
      {formik.touched.desc && formik.errors.desc ? <p>{formik.errors.desc}</p> : null}
      </div>

      <div className='customerbuttondiv'>
      <button id="customerbutton"type="submit">Submit</button>
      </div>
    </form>
        </div>

    </div>
   
  );
};
export default Add