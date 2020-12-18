import React from "react";

const SocialLink = ({ image, name, link }) => (
  <div>
    <a href={link} target="_blank" rel="noreferrer">
      <img src={image} alt={name} />
    </a>
  </div>
);

const Contact = () => {
  const social = {
    id: Math.random(),
    image: "https://placecorgi.com/50",
    name: "social 1",
    link: "https://placecorgi.com/50",
  };
  const list = new Array(5).fill(social);
  return (
    <div>
      <h3>Contatti</h3>
      {/* <Mail /> */}
      <div>
        <textarea></textarea>
        <button type="button">Invia</button>
      </div>
      <div>
        {list.map(({ id, image, name, link }) => (
          <SocialLink key={id} image={image} name={name} link={link} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
