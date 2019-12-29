import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

function Header () {
        return (
            <View  style={styles.header}>
                <Text>I'm header</Text>
            </View>)
}
const styles = StyleSheet.create({
        header: {
               height: height/10,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
        },
});



export default Header;