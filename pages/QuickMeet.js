import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Button, List } from 'react-native-paper'
import myAxios from '../myAxios'
import Header from './Header'

export default function QuickMeet() {

    const [users, setUsers] = useState([])
    useEffect(() => {
        myAxios.get("/v1/users?page=0&size=100").then(response => {
            setUsers(response.data.slice(0, 10))
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
            <Header title="Quick meet with group" subtitle="Take a 15 min break" />
            <ScrollView>
                {
                    users.map((user, i) => <List.Item key={i} left={props => <List.Icon icon='account' />} title={user.firstName + ' ' + user.lastName} description={parseInt(Math.random() * 100) + ' meters from you'} />)
                }
            </ScrollView>
            <Button mode='contained'>Create Quick Meet</Button>
        </>
    )
}
