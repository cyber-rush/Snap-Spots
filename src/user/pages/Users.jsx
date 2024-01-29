import React from 'react'
import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: "Ujjawal Joshi",
            image: "https://images.unsplash.com/photo-1682687982423-295485af248a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            places: 3
        }
    ]
    return (
        <UsersList items={USERS} />
    )
}

export default Users
