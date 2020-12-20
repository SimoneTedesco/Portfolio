import React from "react";
import ContactForm from "./ContactForm";

const SocialLink = ({ image, name, link }) => (
  <div>
    <a href={link} target="_blank" rel="noreferrer">
      <img
        src={image}
        alt={name}
        height="50px"
        width="50px"
        className="rounded-full"
      />
    </a>
  </div>
);

const AboutMe = () => {
  const social = {
    id: Math.random(),
    image: "https://placecorgi.com/50",
    name: "social 1",
    link: "https://placecorgi.com/50",
  };
  const list = new Array(5).fill(social);
  return (
    <div>
      <h2 className="text-4xl">Contatti</h2>
      <div className="flex">
        <ContactForm />
        <div>
          {list.map(({ id, image, name, link }) => (
            <SocialLink key={id} image={image} name={name} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
