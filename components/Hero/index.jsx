import Image from "next/image";
import React from "react";
import styles from "./Hero.module.css";
import logo from "../../public/images/lineage2.png";
import { useRouter } from "next/router";

const Hero = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.container__main}>
        <div className={styles.container__main__text}>
          <h1>Un servidor diferente,</h1>
          <h1>donde todas las clases </h1>
          <h1>cumplen un rol.</h1>
          <p>
            Balance completo para tener una experiencia única. Manteniendo la esencia de Lineage original.
          </p>
        </div>
        <div className={styles.container__main__buttons}>
          <button onClick={() => router.push('#')}>Descargar parche</button>
          <button onClick={() => router.push('#pvp')}>Balance PVP</button>
        </div>
      </div>
      <div className={styles.container__image}>
        <Image
          src={logo}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default Hero;
