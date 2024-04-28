
import {StyleSheet, Text, TouchableOpacity, View, StatusBar} from 'react-native';

import React from "react";

export default function App() {
  const statusBarHeight = StatusBar.currentHeight || 0;
  return (
    <View style={[styles.container, { marginTop: statusBarHeight }]}>
      <View style={styles.topperContainer}>
        <Text>dasdsa</Text>
      </View>
      <View>
        <Text>dasdsa</Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={[styles.button, styles.leftButton]}>
          <Text style={styles.buttonText}>식단 사진</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.rightButton]}>
          <Text style={styles.buttonText}>운동 사진</Text>
        </TouchableOpacity>
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
  topperContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Footer 배경색상
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1, // Footer 상단에 경계선
    borderTopColor: '#ccc', // 경계선 색상
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Footer 배경색상
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1, // Footer 상단에 경계선
    borderTopColor: '#ccc', // 경계선 색상
  },
  button: {
    flex: 1, // 버튼이 화면의 50%를 차지하도록 함
    backgroundColor: '#007bff', // 버튼 배경색상
    paddingVertical: 15, // 버튼 위아래 패딩
    height: '100%', // 버튼의 높이를 100%로 설정
    width: '100%', // 버튼의 넓이를 100%로 설정
  },
  leftButton: {
    marginRight: 0, // 오른쪽 버튼과 간격을 조절
  },
  rightButton: {
    marginLeft: 0, // 왼쪽 버튼과 간격을 조절
  },
  buttonText: {
    color: '#fff', // 버튼 텍스트 색상
    fontWeight: 'bold', // 버튼 텍스트 굵기
    textAlign: 'center', // 텍스트 중앙 정렬
  },
});
