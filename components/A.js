import React from 'react';
import Link from 'next/link'
import style from '../styles/A.module.css'

const A = ({href, text}) => {
    return (
        <Link href={href}>
            <a className={style.link}>{text}</a>
        </Link>
    );
};

export default A;