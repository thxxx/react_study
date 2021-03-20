import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function PlusButton({ func, pcount }) {
    return (
        <TouchableOpacity style={styles.buttonP} onPress={func}>
            <Text> Plus </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonP: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellow',
        width: 50,
        height: 50,
    },
});