import { ReactChild } from "react";
import styles from "./../../styles/components/Button.module.css";
export interface ButtonProps {
    children: ReactChild;
}

const Button: React.SFC<ButtonProps> = ({ children }) => {
    return <button className={styles.container}>{children}</button>;
};

export default Button;
