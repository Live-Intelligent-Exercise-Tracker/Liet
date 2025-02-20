import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TextInput, TouchableOpacity,
  Keyboard, TouchableWithoutFeedback, Image
} from 'react-native';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient'
import api from '../../api';

//flask run <- 서버 여는 코드

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    // 로그인 처리 로직을 여기에 작성
    // if (!email || !password) {
    //   alert('아이디와 비밀번호를 입력하세요');
    //   return;
    // }
    navigation.navigate("MainTabs"); // 넘어가지는지 확인용
    // try {
    //   const response = await api.post("/auth/login", {
    //     email: email,
    //     password: password
    //   });
    //   console.log(response)
    //   const { user_id, token, message } = response.data;

    //   if (!response.data || !user_id || !token) {
    //     setMessage("로그인에 실패했습니다.");
    //     console.log(message)
    //     return;
    //   }

    //   // 로그인 성공 시 처리 (예: 토큰 저장, 화면 전환)
    //   setMessage(message || "로그인 성공!");
    //   localStorage.setItem("user_id", user_id);
    //   localStorage.setItem("token", token);
    //   console.log('로그인 성공:', response.data);
    //   navigation.replace("Main");
    // } catch (error) {
    //   console.error('로그인 실패:', error.response?.data || error.message);
    //   alert('로그인에 실패했습니다.');
    // }
    // console.log('Email:', email);
    // console.log('Password:', password);
  };

  const handleFindId = () => {
    console.log('아이디 찾기 클릭됨');
  };

  const handleFindPassword = () => {
    console.log('비밀번호 찾기 클릭됨');
  };

  const handleSignUp = () => {
    navigation.navigate("Agree")
  };

  const handleKakaoLogin = () => {
    console.log('카카오 로그인');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <LinearGradient
        colors={['#000022', '#000000', '#0000AA']} // 검은색 → 약한 남색 → 진한 파란색
        locations={[0, 0.8, 1]} // 30%까지 검은색, 이후 점점 파란색
        start={{ x: 1, y: 0 }} // 왼쪽 위에서 시작
        end={{ x: 0, y: 1 }} // 오른쪽 아래로 진행
        style={styles.container}
      >

        <View style={styles.textContainer}>
          <Text style={styles.text}>데이터로 설계하는{'\n'}실시간 지능형 운동 추적기</Text>
        </View>

        {/* <Image
          source={require('../../assets/spectrum.png')}
          style={styles.spectrum}
        /> */}

        <TextInput
          style={styles.input}
          placeholder="아이디를 입력하세요"
          placeholderTextColor="#D3D3D3"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="비밀번호를 입력하세요"
          placeholderTextColor="#D3D3D3"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {/* 아이디 찾기 | 비밀번호 찾기 */}
        <View style={styles.findContainer}>
          <View style={styles.account}>
            <TouchableOpacity onPress={handleFindId}>
              <Text style={styles.findText}>아이디 찾기</Text>
            </TouchableOpacity>
            <Text style={styles.findSeparator}> | </Text>
            <TouchableOpacity onPress={handleFindPassword}>
              <Text style={styles.findText}>비밀번호 찾기</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.signup}>
            <TouchableOpacity onPress={handleSignUp}>
              <Text style={styles.signUpText}>회원가입</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>회원 로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, { backgroundColor: '#FDE500', flexDirection: 'row' }]} onPress={handleKakaoLogin}>
          <Image
            source={require('../../assets/kakao_icon.png')} // 이미지 경로 맞춰줘야 함
            style={styles.kakaoIcon}
          />
          <Text style={[styles.buttonText, { color: '#381F1F', left: moderateScale(-10) }]}>카카오톡 로그인</Text>
        </TouchableOpacity>
      </LinearGradient>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: moderateScale(20)
  },
  // spectrum: {
  //   backgroundColor: 'black',
  //   marginBottom: '50'
  // },
  kakaoIcon: {
    width: moderateScale(24),  // 아이콘 크기 조절
    height: moderateScale(24),
    resizeMode: 'contain',  // 비율 유지
    left: moderateScale(-75),
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',  // 세로 정렬 맞추기
    width: '100%',
  },
  text: {
    color: 'white',
    fontSize: moderateScale(26),
    marginBottom: moderateScale(20),
    fontWeight: 'semibold',
    flexDirection: 'row',
    flex: 1, // 왼쪽 영역 차지
  },
  input: {
    width: '100%',
    padding: moderateScale(10),
    marginBottom: moderateScale(15),
    backgroundColor: '#171717',
    color: 'white',
    borderRadius: 3,
    borderColor: 'white',
    borderWidth: 1,
    fontSize: moderateScale(16),
    height: moderateScale(50),
  },
  findContainer: {
    flexDirection: 'row',  // 가로 정렬
    justifyContent: 'space-between', // 양 끝 정렬
    alignItems: 'center',  // 세로 정렬 맞추기
    marginBottom: moderateScale(10),
    width: '100%',
  },
  account: {
    flexDirection: 'row',
    flex: 1, // 왼쪽 영역 차지
  },
  signup: {
    flexDirection: 'row',
    flex: 1, // 오른쪽 영역 차지
    justifyContent: 'flex-end', // 오른쪽 정렬
  },
  findText: {
    color: '#BFBFBF',
    fontSize: moderateScale(15),
  },
  findSeparator: {
    color: '#BFBFBF',
    fontSize: moderateScale(15),
    marginHorizontal: moderateScale(5),
  },
  button: {
    marginTop: moderateScale(20),
    width: '100%',
    height: moderateScale(50),
    justifyContent: 'center',
    backgroundColor: '#507DFA',
    alignItems: 'center',
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: moderateScale(16),
  },
  signUpText: {
    color: '#BFBFBF',
    fontSize: moderateScale(15),
  },
});