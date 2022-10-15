import React from "react";
import styles from "../styles/404.module.css";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <p className={styles.warning}>
        4
        <Image
          src="/images/pokeball.png"
          width="50"
          height="50"
          alt="pokeball"
        />
        4
      </p>
      <p>
        Ops... <br /> o recurso que você tentou acessar não existe em nossa
        base!
      </p>
    </div>
  );
};

export default NotFound;
