import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { List, useTheme } from 'react-native-paper'
import myAxios from '../myAxios'
import Header from './Header'

export default function Recommendation() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        myAxios.get("/v1/users?page=0&size=100").then(response => {
            setUsers(response.data.slice(0, 4))
            setLoading(false)
        }).catch(err => {
            console.log(err);
        })
    }, [])
    return (
        <>
            <Header title="Recommendations from my group" subtitle="Holistic and Physical" />
            {!loading && <>

                <List.Item title="Recommended activites by my group" />
                <List.Item title="Breathing Exercise" left={props => <List.Icon icon="google-fit" />} description={'Suggested by ' + users[3].firstName + ' ' + users[3].lastName} />
                <List.Item title="Yoga" left={props => <List.Icon icon="yoga" />} description={'Suggested by ' + users[0].firstName + ' ' + users[0].lastName} />
                <List.Item title="Stair Climbs" left={props => <List.Icon icon="stairs" />} description={'Suggested by ' + users[2].firstName + ' ' + users[2].lastName} />
                <List.Item title="What others are doing"  />
                <ScrollView>
                    {
                        users.map((user, i) => <List.Item key={i} left={props => <List.Icon icon={'yoga'} />} title={user.firstName + ' ' + user.lastName} description={'At yoga center ' + parseInt(Math.random() * 1000) + ' meters from you'} right={props => <List.Icon icon='phone' color={useTheme().colors.primary} />} />)
                    }
                </ScrollView>
            </>
            }
        </>
    )
}
