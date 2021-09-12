import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import art1 from '../../../Assets/art/blue-circle.svg'
import art2 from '../../../Assets/art/triangles.svg'
import art3 from '../../../Assets/art/unfilled-circle.svg'
import {db} from './firebaseConfig'
import './Form.css'


// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  Mobile: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  msg: yup.string(150)
});



export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
const onSubmit =data => {
  db.collection('data').add(data);
  console.log(data);
}
        

  return (
    <div id="container">
      {/* Contact Form */}
      <h1 className="form-title">Get in touch With <span style={{color: 'rgba(60, 185, 255, 0.9)'}}>Us?</span></h1>      
      <div className="form-art">
        <img src={art1} alt="" className="circle-form" />
        <img src={art2} alt="" className="triangles-form"/>
        <img src={art3} alt="" className="unfilled-form"/>
      </div>
      <form id="contact_form" onSubmit={handleSubmit(onSubmit)}> 
        <div className="name">
          <label for="name"></label>
          <input type="text"{...register("name")} placeholder="Name:" required/>
          {/* <p style={{color: 'red'}}>{errors.name?.message}</p> */}
        </div>
    <div className="Mobile">
      <label for="Mobile"></label>
      <input type="Mobile" {...register("Mobile")} placeholder="Mobile:" required/>
      {/* <p style={{color: 'red'}}>{errors.age?.message}</p> */}
    </div>
    <div className="email">
      <label for="email"></label>
      <input type="email"  {...register("email")} placeholder="Email: " required/>
      {/* <p style={{color: 'red'}}>{errors.email?.message}</p> */}
    </div>
    <div className="message">
      <label for="message"></label>
      <textarea {...register("msg")}  placeholder="Message:" id="message_input" cols="30" rows="3" ></textarea>
      {/* <p style={{color: 'red'}}>{errors.msg?.message}</p> */}
      </div>
    <div className="submit">
      <button type="submit" value="Send Message" id="form_button" type="submit" >submit</button>
    </div>
  </form>
</div>
  );
}

