'use client'
import Link from 'next/link';
import React, {FC, useState} from 'react';

interface Props {
    page: number,
}

const PaginationComponent: FC<Props> = ({page}) => {

    const [currentPage, setCurrentPage] = useState<number>(page)

    const incrument = (num: number) => {
        num++
        return setCurrentPage(num)
    }

    const decrument = (num: number) => {
        num>1 ? num--: 1

        return setCurrentPage(num)
    }

    return (
        <div>
            <button
                onClick={() => decrument(currentPage)}
            >
                <Link href={{pathname: '/movie', query:{data:JSON.stringify(currentPage)}}}>prev</Link>
            </button>

            {currentPage}
            <button
                onClick={() => incrument(currentPage)}
            >
                <Link href={{pathname: '/movie', query:{data:JSON.stringify(currentPage)}}}>next</Link>
            </button>
        </div>
    );
};

export default PaginationComponent;