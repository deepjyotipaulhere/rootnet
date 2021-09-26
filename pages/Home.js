import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import { useTheme } from 'react-native-paper'
import Alarm from './Alarm'
import Compare from './Compare'
import Details from './Details'
import QuickMeet from './QuickMeet'
import Recommendation from './Recommendation'
import Register from './Register'
import Users from './Users'

export default function Home() {
    const stack = createNativeStackNavigator()
    const tab = createMaterialBottomTabNavigator()

    const theme=useTheme()

    const tabs = () => {
        return (
            <tab.Navigator barStyle={{backgroundColor: theme.colors.primary}} theme={useTheme}>
                <tab.Screen options={{ tabBarLabel: "Social Alarm", tabBarIcon:'alarm' }} component={Alarm} name="Alarm" />
                <tab.Screen options={{ tabBarLabel: "Recommendation", tabBarIcon:'bullhorn' }} component={Recommendation} name="Recommendation" />
                <tab.Screen options={{ tabBarLabel: "Quick Meet", tabBarIcon:'account-group' }} component={QuickMeet} name="QuickMeet" />
                <tab.Screen options={{ tabBarLabel: "Stats", tabBarIcon:'chart-timeline-variant' }} component={Compare} name="Compare" />
            </tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                <stack.Screen options={{ headerShown: false }} name="Details" component={Details} />
                <stack.Screen options={{ headerShown: false }} name="Users" component={Users} />

                <stack.Screen options={{ headerShown: false }} name="Profile" component={tabs} />
            </stack.Navigator>
        </NavigationContainer>
    )
}
