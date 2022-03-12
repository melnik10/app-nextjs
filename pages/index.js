import React from 'react';
import A from "../components/A";
import Head from "next/head";
import MainContainer from "../components/MainContainer";

const Index = () => {
    return (
        <MainContainer keywords={'main page'} title={'Main page'}>
            <div>
                <h1>Main page!</h1>

            </div>
        </MainContainer>
    );
};

export default Index;