import React, { useState } from "react";
import "./EmailSignup.css";

const EmailSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission logic here
    console.log("Email submitted:", email);
    setEmail(""); // Clear the input after submission
  };

  return (
    <div className="email-signup">
      <div className="email-signup-content">
        <p className="email-signup-text">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form onSubmit={handleSubmit} className="email-form">
          <div className="email-input-container">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address"
              required
              className="email-input"
            />
            <button type="submit" className="email-submit">
              Get Started &gt;
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailSignup;
