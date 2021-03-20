import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MinusButton({ func }) {
    return (
        <TouchableOpacity onPress={func} style={styles.container}>
            <Text style={{ fontSize: 20 }}> Minus </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: 50,
        height: 50,
    },
});