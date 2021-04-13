import React, { useContext } from "react";
import SidebarContext from "../../contexts/SidebarContext";

import styles from "./../../styles/components/HamburguerMenu.module.css";

const HamburguerMenu: React.FC = () => {
    const { isSidebarOpened, toggleSidebar } = useContext(SidebarContext);
    return (
        <div
            className={`${styles.hamburguer} ${
                isSidebarOpened ? styles.active : ""
            }`}
            onClick={toggleSidebar}
        >
            <span></span>
            <span></span>
            <span></span>
        </div>
    );
};

export default HamburguerMenu;
