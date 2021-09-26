import React from 'react'
import { View, Text, Image } from 'react-native'
import { Badge, Button, List } from 'react-native-paper'
import Header from './Header'
import stat from '../assets/1.jpg'

export default function Details({ navigation }) {
    return (
        <>
            <Header title="Health Stats" />
            <Image source={stat} style={{ width: 400, height: 400 }} />
            <List.Item left={props => <Badge style={{ backgroundColor: 'yellow' }}></Badge>} title="Expected Metrics" />
            <List.Item left={props => <Badge style={{ backgroundColor: 'skyblue' }}></Badge>} title="My Metrics" />
            <List.Item title="Beginner" description="My level" titleStyle={{ fontWeight: 'bold' }} left={props => <List.Icon icon="account" />} />
            <List.Item title="Cycling" description="My interest" titleStyle={{ fontWeight: 'bold' }} left={props => <List.Icon icon="bike" />} />
            <Button onPress={e => navigation.navigate("Users")}>Next</Button>
        </>
    )
}
