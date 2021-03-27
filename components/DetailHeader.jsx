import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Header, Left, Icon, Right, Text, Button, Col } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';

const logo = require('../assets/logo.png');

export default function DetailHeader({ t_title, navigation }) {
    return (
        <Header transparent style={{alignContent:'center'}}>
            <Col size={1} style={{ backgroundColor:'gray', flexDirection:'column', justifyContent:'center'}}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack();
                }} style={{ marginLeft:10 }}>
                    <Icon name="arrow-back" style={{ color: '#fff' }} />
                </TouchableOpacity>
            </Col>
            <Col size={6} style={{flexDirection:'column', justifyContent:'center'}}>
                <Text style={styles.ttitle}>
                    {t_title}
                </Text>
            </Col>
        </Header>
    );
}

const styles = StyleSheet.create({
    logoImage: { width: 100, resizeMode: 'contain', marginLeft: 10 },
    ttitle: {
        alignContent: 'center',
        alignSelf: 'center'
    },
});