import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MyPage() {
    return (<View style={styles.main}><Text>MyPage</Text></View>)
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});