import React, { useContext } from "react";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarContext from "../../contexts/SidebarContext";

import styles from "./../../styles/pages/Dashboard.module.css";

const Dashboard: React.FC = () => {
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
            <div>
                <Header page="Overview" />
                <main className={styles.main}>
                    <section className={styles.cards}>
                        <Card title="Unsolved" value={60} />
                        <Card title="Overdue" value={16} />
                        <Card title="Open" value={43} />
                        <Card title="On hold" value={64} />
                    </section>
                    <section className={styles.trends}>
                        <div className={styles.left}>
                            <h2>Today&apos;s trends</h2>
                            <p>as of 25 may 2019, 09:41 PM</p>
                            <Chart />
                        </div>

                        <ul>
                            <li>
                                <div>
                                    <strong>Resolved</strong>
                                    <span>449</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Received</strong>
                                    <span>426</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Average first response time</strong>
                                    <span>33 m</span>
                                </div>
                            </li>

                            <li>
                                <div>
                                    <strong>Average response time</strong>
                                    <span>3h 8m</span>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <strong>Resolution whithin SLA</strong>
                                    <span>94%</span>
                                </div>
                            </li>
                        </ul>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
