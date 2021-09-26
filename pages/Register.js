import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { Button, Card, RadioButton, TextInput, useTheme } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import myAxios from '../myAxios'
import Header from './Header'
import { rootnetActions } from '../store'

export default function Register({navigation}) {
    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [gender, setGender] = useState('m')
    const [email, setEmail] = useState('')
    const [weight, setWeight] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        dispatch(rootnetActions.setUser({
            "active": true,
            "basalMetabolism": 1865,
            "city": null,
            "country": "IN",
            "email": "deepjyoti ",
            "firstName": "deepjyotipaul69@gmail.com",
            "gender": "m",
            "height": 180,
            "heightUOM": "cm",
            "id": "614eca989187a32ff306f1dd",
            "imperialUnits": false,
            "language": "en",
            "lastName": "",
            "lastSync": null,
            "profilePicUrl": null,
            "timeZone": "Asia/Kolkata",
            "trackerName": null,
            "usualSleepEndTime": null,
            "usualSleepStartTime": null,
            "weight": 80,
            "weightUOM": "kg",
            "yearOfBirth": 1992,
        }))
    }, [])

    const register = () => {
        myAxios.post("/v1/users/", {
            id: null,
            firstName: name,
            lastName: '',
            gender,
            country: 'IN',
            language: 'en',
            timeZone: 'Asia/Kolkata',
            email,
            yearOfBirth: 1992,
            imperialUnits: false,
            height: 180,
            weight: 80,

        }).then(response => {
            console.log(response.data);
            dispatch(rootnetActions.setUser(response.data))
            navigation.navigate("Details")
        }).catch(err => {
            console.log(err.response.data);

        })
    }
    return (
        <>
            <Header title="Sign Up" subtitle="Welcome" />
            <Card>
                <Card.Content>
                    <TextInput onChangeText={e => setName(e)} label="Name" mode='outlined' />
                    <TextInput onChangeText={e => setEmail(e)} label="Email" mode='outlined' />
                    <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                        <>
                            <Text>Male</Text>
                            <RadioButton color={useTheme().colors.primary} value="m" />
                        </>
                        <>
                            <Text>Female</Text>
                            <RadioButton color={useTheme().colors.primary} value="f" />
                        </>
                    </RadioButton.Group>
                    <TextInput onChangeText={e => setWeight(e)} label="Weight (KG)" mode='outlined' />
                    <TextInput onChangeText={e => setAge(e)} label="Age" mode='outlined' />
                    <Button mode='contained' onPress={register}>Register</Button>
                </Card.Content>
            </Card>
            <Button onPress={e=>navigation.navigate("Details")}>Next</Button>
        </>
    )
}
