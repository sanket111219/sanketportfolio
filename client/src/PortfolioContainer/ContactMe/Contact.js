import React, { useState } from "react";
import imgBack from "../../assets/ContactMe/mailz.jpeg";
import load1 from "../../assets/ContactMe/load2.gif";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../../Utilities/Animation";
import { Typewriter } from "react-simple-typewriter";
import axios from "axios";
import { toast } from "react-toastify";
import "./Contact.css";

export default function Contact(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubsrcription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    // console.log(e.target.value)
    setMessage(e.target.value);
  };

  //   console.log(message)

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (err) {
      console.log(err);
    }
    
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Lets keep in touch"} />

      <div className="central-form">
        <div className="col">
          <h2>
            {" "}
            <Typewriter
              words={[
                "Get In Touch",
                "Fill the Contact Form",
                "I will get back to you soon",
              ]}
              loop={true}
              cursor
              cursorStyle={"|"}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>
          <a href="https://www.facebook.com/sanket.das.1232">
            <i className="fa fa-facebook-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/sanket-das-1bb952166/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://www.instagram.com/sanketdas11/">
            <i className="fa fa-instagram"></i>
          </a>
          <a href="https://github.com/sanket111219">
            <i className="fa fa-github"></i>
          </a>
          <a href="https://twitter.com/SanketD1112">
            <i className="fa fa-twitter"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="text" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not found" />
                  </b>
                ) : (
                  " "
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
