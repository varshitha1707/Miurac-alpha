import React, {useState} from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import art1 from '../../../Assets/art/blue-circle.svg'
import art2 from '../../../Assets/art/triangles.svg'
import art3 from '../../../Assets/art/unfilled-circle.svg'
import { initializeApp, firebase } from "firebase/app";
// import { fire} from 'firebase/firestore';
import './Form.css'


// Yup validation schema
const schema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().positive().integer().required(),
  email: yup.string().email().required(),
  msg: yup.string(150)
});



const firebaseConfig = {
  apiKey: "AIzaSyB2HmYYMMvwo2ZFyDEEeSkrsgXXg83vhM8",
  authDomain: "miurac.firebaseapp.com",
  databaseURL: "https://miurac.firebaseio.com",
  projectId: "miurac",
  storageBucket: "miurac.appspot.com",
  messagingSenderId: "558005497129",
  appId: "1:558005497129:web:c9ce77e0a0df507ec1db38"
};


export default function App() {
  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });
  
  
  
const app = initializeApp(firebaseConfig);
const db = app.firestore();

const onSubmit =(data) => {
        console.log(data);
        db.firebase.collection('data').add(data);
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
    <div className="age">
      <label for="age"></label>
      <input type="age" {...register("age")} placeholder="Age:" required/>
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
      <button type="submit" value="Send Message" id="form_button" onClick={onSubmit} type="submit" >submit</button>
    </div>
  </form>
</div>
  );
}

