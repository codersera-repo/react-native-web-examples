import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export default class Profile extends React.Component {
    render() {
        return <View style={styles.container}>
            <Text>This is the Profile screen</Text>
            <Button
                title="Go to Feed"
                onPress={() => this.props.navigation.navigate('Feed')}
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
