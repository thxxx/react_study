import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Icon, Text, Card, CardItem, Item } from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';


// 이건 하나의 이미지만을 뜻한다. 기억! 전체 이미지를 관리하는게 아님
export default function ImageComponent({ navigation, content }) {

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('DetailPage', {
                    content: content  // 이게 맞다고오오오오???
                });
            }}
            style={styles.container}
        >
                <View transparent>
                    <ImageBlurLoading
                        withIndicator
                        thumbnailSource={{ uri: content.image }}
                        source={{ uri: content.image }}
                        style={styles.image}
                    />
                </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexWrap:'wrap',
        width:'33%',
    },
    image: { height: 200, width: '100%', borderRadius: 0 },
});