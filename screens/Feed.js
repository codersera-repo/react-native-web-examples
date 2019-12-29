import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Feed extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>This is the feed screen</Text>
            <Button
                title="Go to Profile"
                onPress={() => this.props.navigation.navigate('Profile')}
            />
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
