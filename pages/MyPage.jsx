import { Container, Item, Content, Thumbnail, Grid, Col, Row  } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';

// 컴포넌트들 가져오기
import DetailHeader from '../components/DetailHeader'
import ImageBlurLoading from 'react-native-image-blur-loading';
import ImageComponent from '../components/ImageComponent';

//사용할 이미지 선언?
const my = require('../assets/my.png');


const data = require('../data.json'); // json에서 데이터를 가져왔다.

export default function MyPage({ navigation }) {
    const goSignIn = () => {
        navigation.navigate('SignInPage');
    };
    return (
        <Container style={styles.container}>

    <DetailHeader t_title="마이 페이지" navigation={navigation} />
    
    <Content style={styles.myinfo}>
        <Thumbnail circular source={my}/>
        <Text style={{fontSize:30, fontWeight:'700'}}>
            스파르타 코딩 클럽 
        </Text>
        <Text style={{fontSize:20}}>
            khj605123@gmail.com
        </Text>
    <Grid style={{height:50, paddingBottom:'0%', alignItems:'center'}}>
        <Col size={1} style={styles.col}>
            <Text>작성한 글</Text>
            <Text style={{color:'deeppink', fontWeight:'600'}}> 7 </Text>
        </Col>
        <Col size={1} style={styles.col}>
            <Text>작성한 댓글</Text>
            <Text style={{color:'deeppink', fontWeight:'600'}}> 21 </Text>
        </Col>
        <Col size={1} style={styles.col}>
            <Text> 방문 횟수 </Text>
            <Text style={{color:'deeppink', fontWeight:'600'}}> 283 </Text>
        </Col>
        </Grid>
    </Content>

    <Content style={{flex:5}}>
        <View style={{flexWrap:'wrap', flexDirection:'row'}}>
            {data.diary.map((content, i) => {
                return (
                    <ImageComponent 
                        content={content}
                        key={i}
                        navigation={navigation}
                    />
            );
            })}
        </View>
    </Content>

    <View style={styles.main}>
            <TouchableOpacity onPress={goSignIn}>
                <Text>로그인 하러가기</Text>
            </TouchableOpacity>
            <Text>MyPage</Text>
        </View>
        </Container>
        )
}

const styles = StyleSheet.create({
    main: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
    },
    container:{
        flexDirection:'column',

    },
    myinfo:{
        flex:3,
        alignContent:'center',
        backgroundColor: 'pink',
    },
    container:{
        flexDirection:'column',

    },
    col:{
        alignSelf:'center',
        alignItems:'center',
    }
});