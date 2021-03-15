import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text numberOfLines={3}>
                {`그날이 오면 그날이 오며는
		삼각산(三角山)이 일어나 더덩실 춤이라도 추고,
		한강(漢江)물이 뒤집혀 용솟음칠 그날이,
		이 목숨이 끊기기 전에 와주기만 할 양이면
		나는 밤하늘에 날으는 까마귀와 같이
		종로(鐘路)의 인경을 머리로 들이받아 울리오리다.
		두개골은 깨어져 산산조각이 나도
		기뻐서 죽사오매 오히려 무슨 한(恨)이 남으오리까.}
			`}
		그 날이 와서, 오오 그 날이 와서
		육조(六曹) 앞 넓은 길을 울며 뛰며 딩굴어도
    	그래도 넘치는 기쁨에 가슴이 미어질 듯하거든
		드는 칼로 이 몸의 가죽이라도 벗겨서 {'\n'}
		커다란 북을 만들어 들쳐 메고는
		여러분의 행렬에 앞장을 서오리다.
		우렁찬 그 소리를 한 번이라도 듣기만 하면
		그 자리에 거꾸러져도 눈을 감겠소이다.
            </Text>
            <View style="container">

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});