'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {FC, useState} from 'react';
import styles from "./PaginamtionComponent.module.css";

interface Props {
    page: number,
}

const PaginationComponent: FC<Props> = ({page}) => {

    const pathName = usePathname();
    console.log(pathName)

    const [currentPage, setCurrentPage] = useState<number>(page)

    const incrument = (num: number) => {
        num++
        return setCurrentPage(num)
    }

    const decrument = (num: number) => {
        num > 1 ? num-- : 1

        return setCurrentPage(num)
    }

    return (
        <div>
            <button
                onClick={() => decrument(currentPage)}
                className={styles.button}
            >
                <Link
                    href={{pathname: pathName, query:
                            {page: JSON.stringify(currentPage)}}}
                    className={styles.buttonLink}
                >
                    prev
                </Link>
            </button>

            <span className={styles.spanBetweenButton}>{page || currentPage}</span>

            <button
                onClick={() => incrument(currentPage)}
                className={styles.button}
            >
                <Link href={{
                    pathname: pathName,
                    query: {page: JSON.stringify(currentPage)}
                }}
                      className={styles.buttonLink}
                >
                    next
                </Link>
            </button>
        </div>
    );
};

export default PaginationComponent;