import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View, Text } from 'react-native'
import { Appbar, useTheme } from 'react-native-paper'

export default function Header({title, subtitle}) {
    const theme=useTheme()
    return (
        <>
            <StatusBar backgroundColor={theme.colors.primary} />
            <Appbar.Header>
                <Appbar.Content title={title || 'RootNet'} subtitle={subtitle || 'Welcome'} />
            </Appbar.Header>
        </>
    )
}
