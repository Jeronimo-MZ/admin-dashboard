import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarContext from "../../contexts/SidebarContext";
import styles from "./../../styles/pages/Tickets.module.css";

// import { Container } from './styles';

const Tickets: React.FC = () => {
    const { isSidebarOpened, toggleSidebar } = useContext(SidebarContext);

    return (
        <div className={styles.container}>
            <div
                className={`${styles.overlay} ${
                    isSidebarOpened ? styles.active : ""
                }`}
                onClick={toggleSidebar}
            />
            <Sidebar />
            <Header page="Tickets" />
        </div>
    );
};

export default Tickets;
