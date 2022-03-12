import React, {useState} from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({users}) => {

    return (
        <MainContainer keywords={'users'} title={'Users'}>
            <div>
                <h1>Users list</h1>
                <ul>
                    {users.map(user =>
                        <li key={user.id}>
                            <Link href={`/users/${user.id}`}>
                                <a>{user.name}</a>
                            </Link>
                        </li>)}
                </ul>
            </div>
        </MainContainer>
    );
};

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    return {
        props: {
            users,
        }, // will be passed to the page component as props
    }
}

export default Users;