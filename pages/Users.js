import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Badge, Button, Divider, List } from 'react-native-paper'
import myAxios from '../myAxios'
import Header from './Header'

export default function Users({navigation}) {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        myAxios.get("/v1/users?page=0&size=100").then(response => {
            setLoading(false)
            setUsers(response.data)
            return response.data
        }).then((usrs) => {
            // usrs.map((u, i) => {
            //     myAxios.get(`/v1/users/${u.id}/activities`).then(rsp => {
            //         usrs[i].activities = rsp.data
            //         setUsers([...users, usrs[i]])
            //     }).catch(ex=>{
            //         console.log(ex);
            //     })
            // })
        }).catch(err => {
            console.log(err);
        })
    }, [])

    return (
        <>
            <Header title="Suggested Groups and Users" subtitle="Follow any group to get started" />
            <ScrollView>
                {
                    users.map((user, i) => <>
                        {
                            i % 10 == 0 ? <><List.Item style={{backgroundColor:'#ddd'}} left={props=><List.Icon icon="bike" />} key={i * 100} title={'Group  Level ' + (i)} titleStyle={{ fontWeight: 'bold' }} right={props => <Button onPress={e=>navigation.navigate("Profile")} icon="plus">Join</Button>} /><Divider /></> : <></>
                        }
                        <List.Item title={user.firstName + " " + user.lastName} key={i} right={props => i % 11 == 0 && <Badge>PRO ATHELETE</Badge>} />
                    </>)
                }
            </ScrollView>
        </>
    )
}
