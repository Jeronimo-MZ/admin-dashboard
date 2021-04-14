import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";
import Chart from "../../components/Chart/Chart";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import Task from "../../components/Task/Task";
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
                    <div className={styles.tickets__tasks}>
                        <section className={styles.tickets}>
                            <header>
                                <div>
                                    <h2>Unresolved tickets</h2>
                                    <p>
                                        Group:<span> Support</span>
                                    </p>
                                </div>
                                <strong>View details</strong>
                            </header>
                            <ul>
                                <li>
                                    <p>Waiting on Feature Request</p>
                                    <span>4238</span>
                                </li>
                                <li>
                                    <p>Awaiting Customer Response</p>
                                    <span>1005</span>
                                </li>
                                <li>
                                    <p>Awaiting Developer Fix</p>
                                    <span>914</span>
                                </li>
                                <li>
                                    <p>Pending</p>
                                    <span>281</span>
                                </li>
                            </ul>
                        </section>
                        <section className={styles.tasks}>
                            <header>
                                <div>
                                    <h2>Tasks</h2>
                                    <p>Today</p>
                                </div>
                                <strong>View All</strong>
                            </header>
                            <p className={styles.new__task}>
                                Create new task{" "}
                                <Button>
                                    <FontAwesomeIcon icon={faPlus} />
                                </Button>
                            </p>
                            <ul>
                                <li>
                                    <Task completed={false} tag="urgent">
                                        Finish ticket update
                                    </Task>
                                </li>
                                <li>
                                    <Task completed={false} tag="new">
                                        Create new ticket example
                                    </Task>
                                </li>
                                <li>
                                    <Task completed={true} tag="default">
                                        Update ticket report
                                    </Task>
                                </li>
                            </ul>
                        </section>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
