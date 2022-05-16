import Image from "next/image";
import React from "react";
import styles from "./Nav.module.css";
import logoWhite from "../../public/images/lineage2.png";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill, RiMenuFill } from "react-icons/ri";
import cs from "classnames";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const wrapperClasses = cs(styles.wrapper, {
    [styles.wrapper__menuOpen]: menuOpen,
  });

  const menuBtnClasses = cs(styles.wrapper__menuBtn, {
    [styles.wrapper__menuBtn__menuOpen]: menuOpen,
  });

  return (
    <div className={wrapperClasses}>
      <div className={menuBtnClasses} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <RiCloseFill /> : <RiMenuFill />}
      </div>
      {/* <div className={styles.wrapper__logo}>
        <Image
          src={logoWhite}
          alt="logo fiumba"
          layout="fill"
          objectFit="contain"
        />
      </div> */}
      <div className={styles.wrapper__status}>
        <div></div><p>Online players: <span>1218</span></p>
      </div>
      <div className={styles.wrapper__nav}>
        <ul>
        <li>
            <Link href="/">
              <a>Crear cuenta</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Instalar</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Caracteristicas</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Donaciones</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
