import styles from './HeroItem.module.css';
import cs from 'classnames';
import useHover from '@/hooks/useHover';
import { motion, Variants } from 'framer-motion';


const HeroItem = ({ title, description }) => {
  const [hoverRef, isHovered] = useHover();

  const TooltipVariants: Variants = {
    initial: {
      opacity: 0,
      y: -10
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className={styles.heroItem}>
      <div
        ref={hoverRef}
        className={cs(styles.heroItem__hoverable, isHovered ? styles.hovered : undefined)}>
        +
      </div>
      {isHovered && (
        <motion.span
          variants={TooltipVariants}
          initial="initial"
          animate="visible"
          className={styles.heroItem__tooltip}>
          <h4>{title}</h4>
          <p>{description}</p>
        </motion.span>
      )}
    </div>
  );
};

export default HeroItem;
