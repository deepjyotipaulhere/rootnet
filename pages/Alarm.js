import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Divider, List } from 'react-native-paper'
import myAxios from '../myAxios'
import Header from './Header'

export default function Alarm() {
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
            <Header title="My Social Alarm" />
            <Text style={{ textAlign: 'center', fontSize: 50, paddingTop: 40 }}>5:00 AM</Text>
            <Text style={{ textAlign: 'center', paddingBottom: 50 }}>Alarm set</Text>
            <Divider />
            <ScrollView>
            {
                users.map((user, i) => <List.Item key={i} left={props=><List.Icon icon={i%3==0?'run':'bike'} />} title={user.firstName + ' ' + user.lastName} description={(i%3==0?'Running':'Cycling')+' ' + parseInt(Math.random() * 1000)+ ' meters from you'} right={props => <Text style={{ color: 'green' }}>Awake</Text>} />)
            }
            </ScrollView>
        </>
    )
}
