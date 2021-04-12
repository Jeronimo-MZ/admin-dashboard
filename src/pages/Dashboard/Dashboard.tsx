import React from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

import styles from "./../../styles/pages/Dashboard.module.css";

const Dashboard: React.FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            <Header />
        </div>
    );
};

export default Dashboard;
