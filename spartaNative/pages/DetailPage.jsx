import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Icon,
  Body,
  Right,
  Button,
  List,
  ListItem,
  Item,
  Input,
  Thumbnail,
} from 'native-base';

import ImageBlurLoading from 'react-native-image-blur-loading';
import DetailHeader from '../components/DetailHeader';
import CommentComponent from '../components/CommentComponent';

const my = require('../assets/my.png');

export default function DetailPage({ navigation, route }) {
  console.log('ROUTE');
  console.log(route);
  const content = route.params.content;
  return (
    <Container>
    <DetailHeader t_title="디테일 페이지" navigation={navigation}/>

      <Content style = {{alignContent:'center', marginLeft:0}}>
        <ImageBlurLoading
          withIndicator
          thumbnailSource={{ uri: content.image }}
          source={{ uri: content.image }}
          style={{ width: '90%', height: 250, borderRadius: 10 }}
        />
        <Text style={styles.title}>
          {content.title}
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '700',
            color: 'grey',
            alignSelf: 'flex-start',
            marginLeft: 25,
            marginTop: 20,
          }}
        >
          {content.desc}
        </Text>

        <Item>
            <Input placeholder="댓글" />
            <Icon active name='airplane'/>
        </Item>
        <List>
          <CommentComponent/>
        </List>

      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 25,
        fontWeight: '900',
        color: '#333',
        alignSelf: 'flex-start',
        marginLeft: '5%',
        marginTop: '10%',
    },
});