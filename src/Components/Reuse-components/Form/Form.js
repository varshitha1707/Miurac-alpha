import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './Form.css'

// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  msg: yup.string(150)
});

export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <div id="container">
      {/* Contact Form */}
      <h1 className="form-title">Get in touch With <span style={{color: 'rgba(60, 185, 255, 0.9)'}}>Us?</span></h1>      
      <form id="contact_form" onSubmit={handleSubmit(onSubmit)}> 
        <div className="name">
          <label for="name"></label>
          <input type="text" {...register("name")} placeholder="Name:" required/>
          {/* <p style={{color: 'red'}}>{errors.name?.message}</p> */}
        </div>
    <div className="age">
      <label for="age"></label>
      <input type="age" {...register("age")} placeholder="Age:" required/>
      {/* <p style={{color: 'red'}}>{errors.age?.message}</p> */}
    </div>
    <div className="email">
      <label for="email"></label>
      <input type="email" {...register("email")} placeholder="Email: " required/>
      {/* <p style={{color: 'red'}}>{errors.email?.message}</p> */}
    </div>
    <div className="message">
      <label for="message"></label>
      <textarea {...register("msg")} placeholder="Message:" id="message_input" cols="30" rows="3" ></textarea>
      {/* <p style={{color: 'red'}}>{errors.msg?.message}</p> */}
      </div>
    <div className="submit">
      <button type="submit" value="Send Message" id="form_button" onClick={onSubmit} type="submit" >submit</button>
    </div>
  </form>
</div>
  );
}

