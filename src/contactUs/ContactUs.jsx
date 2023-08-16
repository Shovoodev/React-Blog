import "./contactUs.css"
import { useState } from "react";
const ContactUs = () => {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        console.log("Full name: ", fullname);
        console.log("Email: ", email);
        console.log("Message: ", message);
    
        const res = await fetch("api/contact", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            fullname,
            email,
            message,
          }),
        });
    
        const { msg, success } = await res.json();
        setError(msg);
        setSuccess(success);
    
        if (success) {
          setFullname("");
          setEmail("");
          setMessage("");
        }
      };
  return (
    <>
    <div className="apply_all" >
      <h1 className="upper_padding"> Contact Us </h1>
      <p>Please fill in the form below <span className="span_text">for more information and contant of our blog page</span></p>
      </div>
      <form
      className="form"
        onSubmit={handleSubmit}
    >
      <div className="apply_all" >
        <label htmlFor="fullname">Full Name</label>
        <input
        onChange={(e) => setFullname(e.target.value)}
          value={fullname}
          type="text"
          id="fullname"
          placeholder="type your name"
        />
      </div>

      <div className="apply_all">
        <label htmlFor="email">Email</label>
        <input
         onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="text"
          id="email"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="text_massage">
        <label htmlFor="message">Your Message</label>
        <textarea
         onChange={(e) => setMessage(e.target.value)}
          value={message}
          className="taxtarea"
          id="message"
          placeholder="Type your message here..."
        ></textarea>
      </div>

      <button className="submit_btn" type="submit">
        Send
      </button>
    </form>
    <div className="error_massage">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>
    </>
  )
}

export default ContactUs
