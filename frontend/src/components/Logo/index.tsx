import { Link } from "react-router-dom";
import styles from './Logo.module.css'

interface LogoProps {
  path: string;
}
export default function Logo({ path }: LogoProps) {
  return (
    <Link to={path} className={styles["logo-container"]} aria-label="Logo">
      <div className={styles["logo"]} />
    </Link>
  )
}
