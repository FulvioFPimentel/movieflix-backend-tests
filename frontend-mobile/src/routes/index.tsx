import React from 'react'
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack'
import { Login, NavBar, Movie, MovieDetails } from '../pages'
import { Text, View } from 'react-native';
import { colors, nav } from '../styles';

export type StackParam = {
    Movie: undefined;
    MovieDetails: {id: number}
    Login: undefined;
}
const Stack = createStackNavigator<StackParam>();

const HeaderText: React.FC = () => <Text style={nav.leftText}>MovieFlix</Text>

const Routes: React.FC = () => {
    return (
            <Stack.Navigator screenOptions={{
                headerTitle: "",
                headerStyle: {
                    backgroundColor: colors.orange
                },
                headerLeft: () => <HeaderText />,
                headerRight: () => <NavBar />
            }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Movie" component={Movie} />
            <Stack.Screen name="MovieDetails" component={MovieDetails} />
        </Stack.Navigator>


    )
}

export default Routes;
