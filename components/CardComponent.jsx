import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text, Card, CardItem } from 'native-base';
const image = require('../assets/background2.png');
const logo = require('../assets/logo.png');

import ImageBlurLoading from 'react-native-image-blur-loading';
//이미지 블러 로딩 사용

export default function CardComponent({ navigation }) {
    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('DetailPage');
            }}
            style={styles.container}
        >
            <Card style={styles.card} transparent>
                <CardItem transparent>
                    <ImageBlurLoading
                        withIndicator
                        thumbnailSource={image}
                        source={image}
                        style={styles.image}
                    />
                </CardItem>
                <CardItem style={{ marginTop: -10 }}>
                    <Grid>
                        <Col size={9}>
                            <Text numberOfLines={1} style={styles.title}>
                                제목이 쓰여요
              </Text>
                            <Text style={[styles.grey, styles.writer]}>
                                스파르타코딩 클럽
              </Text>
                        </Col>
                        <Col size={2}>
                            <Grid>
                                <Col>
                                    <Icon name="chatbox-outline" style={styles.grey} />
                                </Col>
                                <Col>
                                    <Icon name="heart-outline" style={styles.grey} />
                                </Col>
                            </Grid>
                        </Col>
                    </Grid>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: { alignItems: 'center', alignSelf: 'center' },
    card: {
        width: '100%',
        alignSelf: 'center',
    },
    image: { height: 200, width: '100%', borderRadius: 10 },
    grey: { color: 'grey' },
    writer: { fontSize: 12, color: 'grey', marginLeft: 10 },
    title: { fontWeight: '700', fontSize: 15, marginLeft: 10 },
});