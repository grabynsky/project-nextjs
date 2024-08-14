import React from 'react';
import Link from "next/link";
import styles from "./header.module.css";

const HeaderComponent = () => {



    return (
        <div>
            <Link href={'/movie'} className={styles.header}>movies</Link>
            <Link href={'/genres'} className={styles.header}>genres</Link>
        </div>
    );
};

export default HeaderComponent;