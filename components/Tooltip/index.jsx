import React from 'react'
import styles from './Tooltip.module.css'

const Tooltip = () => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.tooltipText}>
        Texto que aparece al hover
      </span>
      <span>Hover me</span>
    </div>
  )
}

export default Tooltip