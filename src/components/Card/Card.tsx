import styles from "../../styles/components/Card.module.css";

export interface CardProps {
    title: string;
    value: number;
}
const Card: React.FC<CardProps> = ({ title, value }) => {
    return (
        <div className={styles.container}>
            <strong>{title}</strong>
            <span>{value}</span>
        </div>
    );
};

export default Card;
