import React from 'react';
import styles from './VideoSeparator.module.css';
import { useRouter } from "next/router";

const VideoSeparator = () => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <div className={styles.container__video}>
        <video autoPlay muted loop>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <p>Todas las clases son útiles</p>
        <h2 onClick={() => router.push('#')}>Ver detalles</h2>
      </div>
      <a id="pvp"></a>
    </div>
  )
}

export default VideoSeparator