import React, { useState, useEffect, version } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import PlusButton from './components/PlusButton';
import MinusButton from './components/MinusButton';


export default function App() {
    const [count, psetState] = useState(0); // 초기화값이 들어간다.
    const [title, pcTitle] = useState("Loading...")
    const Plus = () => {
        psetState(count + 1);
    };
    const Minus = () => {
        psetState(count - 1); // 안에는 함수호출시 변화할 state 값이다.
    };
    useEffect(() => {
        setTimeout(() => {
            pcTitle("click it!")
            psetState(0)
        }, 2000)
    }, []);

    return (
        <View style={styles.main}>
            <Text style={styles.text}> {title} 현재 숫자 : {count} </Text>
            <View style={styles.buttonC}>
                <PlusButton func={Plus} pcount={count} />
                <MinusButton func={Minus} pcount={count} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
    buttonC: {
        marginTop: 100,
        flexDirection: 'row',
    },
});