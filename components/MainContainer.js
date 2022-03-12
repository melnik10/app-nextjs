import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords, title}) => {
    return (
        <>
            <Head>
                <meta keywords={'melnikov, nextjs,' + keywords}></meta>
                <title>{title}</title>
            </Head>
            <div className={'navbar'}>
                <A href={'/'} text={'Main'}/>
                <A href={'/users'} text={'Users'}/>
            </div>
            <style jsx>
                {`
                      .navbar {
                        background-color: orange;
                        padding: 15px;
                      }
                    `}
            </style>
            {children}
        </>

    );
};

export default MainContainer;