import React,{useState} from 'react'
import './Contact.css'
import{AiFillFacebook,AiOutlineGithub} from'react-icons/ai'
import{BsLinkedin} from'react-icons/bs'
import { useTheme } from '../../Context/ThemeContext'
import Lottie from "lottie-react";
import contactAnimation from "../../assets/animation_ll6krtnt.json";
import { Fade } from "react-awesome-reveal";
import {toast} from "react-toastify"
import axios from "axios";
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [theme] = useTheme();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name === '' || email === '' || message === '') {
        toast.error('Please fill all the fields');
        return
      }
      
      const response = await axios.post('http://localhost:8080/api/v1/portfolio/sendEmail', {name, email, message});
     
      if(response.data.sucess) {
        toast.success(response.data.message);
        setName('');
        setEmail('');
        setMessage('');
       }
      else  {
        toast.error(response.data.message);
       }
     

     
    } catch (error) {
     
      toast.error('An error occurred while sending the message.');
    }
  };

  return (
    <>
  
 
      <div className="container contact" id='contact'>
         <div className='contactPhoto'>
            {/* <img src="https://media.istockphoto.com/id/1365544413/video/contact-us-concept.jpg?s=640x640&k=20&c=a6o5RVk_pVTjL_YXzFQYSa76PahdhH7OLCLdv3iel_I=" alt="photo" /> */}
            <Lottie animationData={contactAnimation} loop={false} />
         </div>
         <div className='borderLine'>.</div>
     
         <div className='secondportion'>
            <div className='contactWithIcon'>
                <h6 className='my-0'>Contact with </h6>
               <a target={"_blank"} href="https://www.facebook.com/Firangibahi007/">
               <AiFillFacebook className='contactIcon' color={theme==="dark"?"white":'blue'} size={28}/>
                </a> 
               <a target={"_blank"} href="https://www.linkedin.com/in/farzeel-aftab-2568a727b/">
               <BsLinkedin className='contactIcon' color={theme==="dark"?"white":'blue'} size={23}/>
                </a> 
               <a target={"_blank"} href="https://github.com/Farzeel">
               <AiOutlineGithub className='contactIcon' color={theme==="dark"?"white":'black'} size={28}/>
                </a> 
                
               
                </div>
            
            <div className='lineOrLine'>
                <div className='firstLine'></div>
                <small className='smallText' style={{color:theme==="dark"?"white":"black"}}>OR</small>
                <div className='secondLine'></div>
            </div>
            <div className='contactForm'>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Your Name' />
                <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter Your Email' />
                <textarea value={message} onChange={(e)=>setMessage(e.target.value)} className='contactTextarea' placeholder='Enter Your Message'></textarea>
                <button className='sendMsgBtn' onClick={handleSubmit}>Send Message</button>
            </div>
         </div>
       
      </div>
    </>
  )
}

export default Contact
