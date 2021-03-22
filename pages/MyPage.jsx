import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function MyPage({ navigation }) {
    const goSignIn = () => {
        navigation.navigate('SignInPage');
    };
    return (
        <View style={styles.main}>
            <TouchableOpacity onPress={goSignIn}>
                <Text>로그인 하러가기</Text>
            </TouchableOpacity>
            <Text>MyPage</Text>
        </View>)
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});