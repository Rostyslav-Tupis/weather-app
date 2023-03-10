import React from "react";
import styles from "./loader.module.css"

function Loader(){
    return (
        <div className={styles["spinner-container"]}>
            <div className={styles["loading-spinner"]}>
            </div>
        </div>
    )
}

export default Loader;