import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import Home from '../screens/Home'
import Chat from '../screens/Chat'
import Profile from '../screens/Profile'

export default function TabNavigation() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Chat" component={Chat}
                options={{
                    tabBarLabel: "Chat",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name='chatbox' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Profile" component={Profile}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user-circle-o" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}