import React from "react";

const ContactForm = () => {
  const sendMail = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={sendMail} className="w-2/4">
      <label htmlFor="form-name" className="block mb-2">
        Nome:
        <input type="text" id="form-name" className="block w-1/2" />
      </label>
      <label htmlFor="form-email" className="block mb-2">
        Email:
        <input type="text" id="form-email" className="block w-1/2" />
      </label>
      <label htmlFor="form-body" className="block mb-2">
        Testo:
        <textarea id="form-body" className="block w-1/2" />
      </label>
      <div className="flex justify-end w-1/2">
        <button
          type="submit"
          className="bg-white mt-4 px-4 rounded text-black text-right"
        >
          Invia
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
