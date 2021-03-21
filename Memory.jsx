import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Alert, ScrollView } from 'react-native';
import PopupButton from './1st_components/PopupButton';
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
import PopupButton from './1st_components/PopupButton';

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

import React, { useState, useEffect, version } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import PlusButton from './1st_components/PlusButton';
import MinusButton from './1st_components/MinusButton';


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

