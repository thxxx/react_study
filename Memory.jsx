import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import PopupButton from './components/PopupButton';
import data from './data.json';

const tempList = [
  { title: 1 },
  { title: 2 },
  { title: 3 },
  { title: 4 },
  { title: 5 },
];

export default function App() {
  const [pstate, psetState] = useState(tempList);

  useEffect(() => {
    setTimeout(() => {
      psetState(data.diary); // psetState로 pstate 를 tempList에서 data.diary로 변경시킨다.
      // 상태가 변경이 되면 화면을 다시 그려주지!!
    }, 2000); // 1000이 1초
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.contianer}>
      {pstate.map((content, i) => {
        return (
          <View key={i}>
            <Text>{content.title}</Text>
          </View>);
      })} </ScrollView>);
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import React from 'react';
import { StyleSheet, View, Text, Alert } from 'react-native';
import PopupButton from './components/PopupButton';

export default function App() {
  const CustomAlert = () => {
    Alert.alert('로그인 페이지에서 구현된 팝업!');
  };
  return (
    <View style={styles.contianer}>
      <Text> SignInPage </Text>

      <PopupButton CustomAlert={CustomAlert} title={'로그인페이지 팝업'} />
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

