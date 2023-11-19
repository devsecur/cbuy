import React from "react";
import styles from "./styles.module.css";

const SliderNext: React.FC = () => {
    return (
        <div className={styles.slider}>
            <div className={styles.background} />
            <div className={styles.contentWrapper} >
                <div className={styles.content} >
                    Slider
                </div>
            </div>
        </div>
    );
};

export default SliderNext;
