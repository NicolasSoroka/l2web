import Head from "next/head";
import styles from "./Layout.module.css";
import { VideoSeparator, Nav, Hero, Footer, FloatingNav } from "../index";
import { motion } from "framer-motion";
import AppHead from "../AppHead";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <AppHead/>
      <Nav />
      <Hero />
      <motion.main>{children}</motion.main>
      {/* <FloatingNav /> */}
      <VideoSeparator/>
      <Footer />
    </div>
  );
};

export default Layout;
