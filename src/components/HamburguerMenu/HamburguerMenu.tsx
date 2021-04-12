import React from "react";

import styles from "./../../styles/components/HamburguerMenu.module.css";

const HamburguerMenu: React.FC<{ closed: boolean }> = ({ closed = false }) => {
    return (
        <div>
            <span></span>
            <span></span>
        </div>
    );
};

export default HamburguerMenu;
