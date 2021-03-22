import React from 'react';
import { StyleSheet } from 'react-native';
import { Item, Input, Label } from 'native-base';

//하나의 컴포넌트화 시켜서 (묶어서) 따로 빼놓는다.

// 아이템 안에 레이블이랑 인풋!!!

export default function ItemInput({ title }) {
    return (

        <Item floatingLabel last>
            <Label style={styles.label}>{title}</Label>
            <Input style={styles.input} />
        </Item>
    );
}

const styles = StyleSheet.create({
    label: {
        color: '#fff',
    },
    input: {
        color: '#fff',
    },
});