import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createBrowserApp} from '@react-navigation/web';

import Feed from "../screens/Feed";
import Profile from "../screens/Profile";
import {Platform} from "react-native";

const isWeb = Platform.OS === 'web';


const Home = createStackNavigator(
    {
        Profile: Profile,
        Feed: Feed,
    },
    {
        navigationOptions: {
            headerTintColor: '#fff',
            headerStyle: {
                backgroundColor: '#000',
            },
        },
    }
);

const container = isWeb ? createBrowserApp(Home): createAppContainer(Home);

export default container;
