import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SignUpPage({ navigation: { goBack }, route }) {
    return (
        <View style={styles.contianer}>
            <Text> SignUpPage </Text>
            <Button onPress={() => goBack()} title={route.params.title} />
        </View>
    );
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});