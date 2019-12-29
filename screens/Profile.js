import React from 'react';
import {View, Text, StyleSheet, Button, Platform} from 'react-native';
import {Link} from '@react-navigation/web'

const isWeb = Platform.OS === 'web';

export default class Profile extends React.Component {

    static navigationOptions = {
        title: "Profile screen demo"
    }

    static path = "";

    render() {
        return <View style={styles.container}>
            <Text>This is the Profile screen</Text>
            {
                !isWeb ? <Button
                    title="Go to Feed"
                    onPress={() => this.props.navigation.navigate('Feed')}
                />:             <Link routeName="Feed">Go Feed</Link>

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
