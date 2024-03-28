import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import whiteArrow from '../../assets/white-arrow.png'
import { useState } from 'react'
const Contact = () => {
    const [result, setResult] = useState("");


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "a19e508d-9c41-47b7-9426-d0bdbefeab85");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a  <img src={msg_icon} alt="msg_icon" /> </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo veritatis possimus velit ratione temporibus accusamus iure reiciendis dolore odit!</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> contact@edusity.in</li>
                <li><img src={phone_icon} alt="" />+91- 75987852</li>
                <li><img src={location_icon} alt="" />69 Mathiya Gaon <br /> Nala Sopara Mumbai, India</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label htmlFor="">
                    Your name
                </label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label htmlFor="">
                    Phone Number
                </label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now <img src={whiteArrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact