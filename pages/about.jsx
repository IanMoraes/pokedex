import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Este é um pequeno projeto que fornece dados sobre pokémon. Foi
        desenvolvido utilizando o framework Next.js visando explorar as
        funcionalidades de Server Side Rendering.
      </p>
      <Image
        src="/images/charizard.png"
        width="300"
        height="300"
        alt="charizard"
      />
    </div>
  );
};

export default About;
