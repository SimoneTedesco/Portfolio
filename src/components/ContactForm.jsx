import React from "react";

const ContactForm = () => {
  const sendMail = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={sendMail} className="w-2/4">
      <label htmlFor="form-name" className="block">
        Nome:
        <input type="text" id="form-name" className="block" />
      </label>
      <label htmlFor="form-email" className="block">
        Email:
        <input type="text" id="form-email" className="block" />
      </label>
      <label htmlFor="form-body" className="block">
        Testo:
        <textarea id="form-body" className="block" />
      </label>
      <button type="submit">Invia</button>
    </form>
  );
};

export default ContactForm;
