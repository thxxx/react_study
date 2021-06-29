import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
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
const my = require('../assets/my.png');
const width = Dimensions.get('screen').width;

export default function CommentComponent() {
  return (
    <ListItem thumbnail>
    <Left>
      <Thumbnail circular source={my} /> 
    </Left>
    <Body>
      <Text style={{ fontWeight:'800'}}>댓글 작성자</Text>
      <Text style={{marginTop:3}} note numberOfLines={3}> 댓글 내용 </Text>
    </Body>
    <Right>
      <Button transparent>
        <Text>왜 버튼?</Text>
      </Button>
    </Right>
  </ListItem>
  );
}