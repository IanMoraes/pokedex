import React from "react";
import Image from "next/image";
import styles from "../styles/About.module.css";
const About = () => {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum et
        obcaecati itaque molestiae voluptatibus, odio quibusdam aliquid numquam
        aut impedit quod ipsam dolorum similique laboriosam maiores nobis at
        nulla cupiditate!
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
