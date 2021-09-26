import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import Header from './Header'
import Tabs from 'react-native-tabs';
import { List, useTheme } from 'react-native-paper';
import myAxios from '../myAxios';

import rootnet0 from '../assets/rootnet0.jpg'
import rootnet1 from '../assets/rootnet1.jpg'
import rootnet2 from '../assets/rootnet2.jpg'
import rootnet3 from '../assets/rootnet3.jpg'
import rootnet4 from '../assets/rootnet4.jpg'
import { GiftedChat } from 'react-native-gifted-chat';

function Info() {

}

export default function Compare() {
    const [crrentTab, setCrrentTab] = useState('4')
    const [details, setDetails] = useState([])
    const theme = useTheme()
    const messages = [
        [
            {
                _id: 1,
                text: 'Welcome to the club 😇',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/people',
                },
            },
            {
                _id: 2,
                text: 'Just increase water intake and you\'ll be fine.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 3,
                text: 'Excellent streak!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ],
        [
            {
                _id: 1,
                text: 'Don\'t let water intake go down',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Just a bit more control on diet.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 3,
                text: 'Going great!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ],
        [
            {
                _id: 1,
                text: 'Your diet needs to be controlled. Get balanced protein and carbs sources like banana and oats.',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ],
        [
            {
                _id: 1,
                text: 'Keep going. Reduce stress and do some yoga and stretching after runs',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
        ],
        [
            {
                _id: 1,
                text: 'Your calorie burn level is too high compared to sleep and water intake. Reduce the pace :)',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Eat some nuts and proteins after runs. This will help ease the muscles',
                createdAt: new Date(),
                user: {
                    _id: 3,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/people',
                },
            },
        ],
    ]
    const stats = [rootnet0, rootnet1, rootnet2, rootnet3, rootnet4]
    useEffect(() => {
        myAxios.get("/v1/users/613dc4c9309a3f06bfa716ee/dailyDetails?startDate=2021-09-10&endDate=2021-09-30").then(response => {
            setDetails(response.data.slice(0, 5))
        })
    }, [])
    return (
        <>
            <Header title="My Position" subtitle="Where I stand" />
            <List.Item title="250" description="My Points" titleStyle={{ fontWeight: 'bold' }} left={props => <List.Icon icon='arrow-up' />} right={props => <Text style={{ marginTop: 20 }}>50 points to Pro</Text>} />
            <Image source={stats[crrentTab]} style={{ width: 400, height: 400 }} />
            {/* <Text style={{ textAlign: 'center', padding: 10 }}>Suggestions from group</Text> */}
            <GiftedChat messagesContainerStyle={{ backgroundColor: 'white' }} textInputProps={{ style: { display: 'none' } }}
                messages={messages[crrentTab]}
                user={{
                    _id: 1,
                }}
            />
            <Tabs selected={crrentTab} style={{ backgroundColor: theme.colors.primary, color: 'black' }}
                selectedStyle={{ color: 'red' }} onSelect={el => setCrrentTab(el.props.name)}>
                <Text name="0" style={{ color: 'white' }}>Today</Text>
                <Text name="1" style={{ color: 'white' }}>Yesterday</Text>
                <Text name="2" style={{ color: 'white' }}>2 days</Text>
                <Text name="3" style={{ color: 'white' }}>3 days</Text>
                <Text name="4" style={{ color: 'white' }}>4 days</Text>
            </Tabs>
        </>
    )
}
