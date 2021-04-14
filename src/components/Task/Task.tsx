import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "../../styles/components/Task.module.css";
export interface TaskProps {
    completed: boolean | undefined;
    tag: "new" | "urgent" | "default" | undefined;
}

const Task: React.FC<TaskProps> = ({
    children,
    completed = false,
    tag = "default",
}) => {
    const [isCompleted, setIsCompleted] = useState(completed);
    const className = styles[tag.toLocaleLowerCase()];
    function handleClick() {
        setIsCompleted(!isCompleted);
    }
    return (
        <p className={styles.container}>
            <span>
                <input type="checkbox" id="completed" checked={isCompleted} />
                <label htmlFor="completed" onClick={handleClick}>
                    {isCompleted && <FontAwesomeIcon icon={faCheck} />}
                </label>
                {children}
            </span>
            <span className={className}>{tag}</span>
        </p>
    );
};

export default Task;
