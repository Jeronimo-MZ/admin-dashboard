import React, { useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    faAward,
    faBook,
    faChartPie,
    faCog,
    faLightbulb,
    faTicketAlt,
    faUsers,
    faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./../../styles/components/Sidebar.module.css";
import logo from "./../../assets/logo.png";
import SidebarContext from "../../contexts/SidebarContext";

const Sidebar: React.FC = () => {
    const location = useLocation()?.pathname;
    const { isSidebarOpened } = useContext(SidebarContext);
    const localStorageVar = "dashboard:theme";

    const toggleDarkTheme = () => {
        const root = document.querySelector(":root");

        if (root?.classList.contains("dark")) {
            localStorage.setItem(localStorageVar, "light");
            root?.classList.remove("dark");
        } else {
            localStorage.setItem(localStorageVar, "dark");
            root?.classList.add("dark");
        }
    };

    useEffect(() => {
        const theme = localStorage.getItem(localStorageVar) || "light";
        const root = document.querySelector(":root");

        if (theme === "dark") {
            localStorage.setItem(localStorageVar, "dark");
            root?.classList.add("dark");
        }
    }, []);

    return (
        <aside
            className={`${styles.container} ${
                isSidebarOpened ? styles.show : ""
            }`}
        >
            <div className={styles.logo} onClick={toggleDarkTheme}>
                <img src={logo} alt="logo" />
                <strong>Dashboard Kit</strong>
            </div>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={
                                location === "/" || location === "/dashboard"
                                    ? styles.active
                                    : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faChartPie} />
                            </span>
                            <span>Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/tickets"
                            className={
                                location === "/tickets" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faTicketAlt} />
                            </span>
                            <span>Tickets</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/ideas" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faLightbulb} />
                            </span>
                            <span>Ideas</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/contacts" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <span>Contacts</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/agents" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faUserTie} />
                            </span>
                            <span>Agents</span>
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/articles" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faBook} />
                            </span>
                            <span>Articles</span>
                        </Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/settings" ? styles.active : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faCog} />
                            </span>
                            <span>Settings</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className={
                                location === "/subscription"
                                    ? styles.active
                                    : ""
                            }
                        >
                            <span>
                                <FontAwesomeIcon icon={faAward} />
                            </span>
                            <span>Subscription</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;
