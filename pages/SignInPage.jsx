import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';

export default function SignInPage({ navigation }) { // navigation 사용가능하다. 아무도 안넘겨 줬지만!!
    const goSignUp = () => {
        navigation.navigate('SignUpPage', { title: '회원가입 페이지에서 왔음' }); // 스택 스크린에서 준 이름으로 사용.
    };
    return (
        <View style={styles.contianer}>
            <Text> SignInPage </Text>
            <TouchableOpacity onPress={goSignUp}>
                <Text>회원가입 하러가기</Text>
            </TouchableOpacity>
            <Button onPress={() => goBack()} title="aaa" />
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