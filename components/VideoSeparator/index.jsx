import React from 'react';
import styles from './VideoSeparator.module.css';
import { useRouter } from "next/router";
import { motion } from "framer-motion"

const VideoSeparator = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.container__video}>
        <video autoPlay muted loop>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <p>Todas las clases son útiles</p>
        <h2>La mejor party, la mas completa</h2>
        <motion.h3
          onClick={() => router.push('#')}
          whileHover={{
            scale: 1.1,
            transition: { duration: .2 },
          }}>
          Ver detalles
        </motion.h3>
      </div>
      <a id="pvp"></a>
    </div>
  )
}

export default VideoSeparator