import React from "react";
import styles from "../../styles/components/Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import avatar from "./../../assets/avatar.jpg";
import HamburguerMenu from "../HamburguerMenu/HamburguerMenu";

const Header: React.FC<{ page: string }> = ({ page = "" }) => {
    return (
        <header className={styles.container}>
            <div className={styles.left}>
                <HamburguerMenu />
                <h1>{page}</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.buttons}>
                    <button>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faBell} />
                    </button>
                </div>
                <div className={styles.user}>
                    <strong>Jerónimo Matavel</strong>
                    <img src={avatar} alt="Jerónimo" />
                </div>
            </div>
        </header>
    );
};

export default Header;
