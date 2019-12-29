import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {Link} from "@react-navigation/web";

const isWeb = Platform.OS === 'web';


export default class Feed extends React.Component {
    static navigationOptions = {
        title: "Feed"
    }

    static path = "feed";

    render() {
        return <View style={styles.container}>
            <Text>This is the feed screen</Text>
            {
                !isWeb ? <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
            />:  <Link routeName="Profile">Go Profile</Link>

            }


        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
