import React, { useEffect } from 'react';

import { Platform } from 'react-native'; // 처음 보는거
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // 이게 탭 네비게이터 임포트겠고

// 탭 네비게이터에 연결시킬 페이지들 불러온다.
import MainPage from '../pages/MainPage';
import MyPage from '../pages/MyPage';
import AddPage from '../pages/AddPage';

// 아이콘 써먹기
import { Ionicons } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator(); // 탭 생성

const TabNavigator = ({ navigation, route }) => {
    return (
        <Tabs.Navigator
            // 탭 속성 설정해주기
            screenOptions={({ route }) => ({ // 라우트를 인자로 사용 탭네비게이터도 스택스크린에 연결되어 있으니까
                tabBarIcon: ({ focused }) => { // 탭 네비게이터에서 주는 기능. 포커스드

                    // 구동중인 OS를 확인할수 있다..!
                    let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

                    if (route.name === 'MainPage') { // 아이콘 이름으로 바로 쓸 수 있다. 아이콘 사이트에서 이름 확인
                        // route에 name이 있었나??
                        iconName = 'md-alarm';
                    } else if (route.name === 'AddPage') {
                        iconName += 'apps-outline';
                    } else if (route.name === 'MyPage') {
                        iconName += 'person';
                    }
                    return <Ionicons
                        name={iconName}
                        color={focused ? 'hotpink' : 'grey'} // focused가 클릭된건지 아닌지??! 삼항연산자
                        size={26}
                    />
                }
            })}
            // 스크린옵션과 탭바옵션은 따로.
            tabBarOptions={{
                showLabel: true,
                style: {
                    backgroundColor: '#fff',
                    borderTopColor: '#eee',
                    height: 80,
                    fontSize: 10,
                    justifyContent: "center",
                    alignItems: "center",
                },
                // activeTintColor: 'tomato', // 누른 사진
                // inactiveTintColor: 'gray', // 안누른 사진
            }}
        >
            {/*탭의 페이지들*/}
            <Tabs.Screen name="MainPage" component={MainPage} />
            <Tabs.Screen name="MyPage" component={MyPage} />
            <Tabs.Screen name="AddPage" component={AddPage} />
        </Tabs.Navigator>
    );
};

export default TabNavigator;