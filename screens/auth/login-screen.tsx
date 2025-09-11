import ButtonCustom from '@/components/common/button-custom';
import InputCustom from '@/components/common/input-custom';
import { useLoginMutation } from '@/hooks/useAuth';
import { Link } from 'expo-router';
import { Lock, Mail, SendHorizontal } from 'lucide-react-native';
import React, { useState } from 'react';
import { Alert, ImageBackground, Text, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const loginMutation = useLoginMutation();
  // const [url, setUrl] = useState<string | null>(null);
  // useFocusEffect(() => {
  //   useCallback(() => {
  //     const getInitialUrl = async () => {
  //       const initialUrl = await Linking.getInitialURL();
  //       if (initialUrl) setUrl(initialUrl);
  //     };
  //     getInitialUrl();
  //     const subscription = Linking.addEventListener('url', (event) => {
  //       setUrl(event.url);
  //     });
  //     return () => subscription.remove();
  //   }, []);
  // });
  // useEffect(() => {
  //   if (url) {
  //     const { hostname, path, queryParams } = Linking.parse(url);
  //     console.log('hostname', hostname);
  //     console.log('path', path);
  //     console.log('queryParams', queryParams);
  //   }
  // }, [url]);

  const handleLogin = () => {
    setLoading(true);
    loginMutation
      .mutateAsync({ email, password })
      .then(() => console.log('Login successful'))
      .catch((error) =>
        Alert.alert(
          'Đăng nhập thất bại',
          error?.message || 'Có lỗi xảy ra, vui lòng thử lại'
        )
      )
      .finally(() => setLoading(false));
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      className='flex-1 bg-white px-4 justify-center items-center py-28'
      resizeMode='cover'
    >
      <View className='flex justify-center items-center gap-2'>
        <Text className='text-5xl font-mBold'>LOGO</Text>
        <Text className='text-2xl font-mSemiBold mt-4'>Urban Lens</Text>
      </View>
      <View className='flex-1 justify-center items-center gap-6 w-96'>
        <View className='w-full flex justify-start mb-4'>
          <Text className='text-4xl font-mSemiBold'>Login</Text>
        </View>
        <InputCustom
          placeholder='example@gmail.com'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
          icon={<Mail size={22} color={'#6b7280'} />}
        />
        <InputCustom
          placeholder='Your Password'
          keyboardType='default'
          onChangeText={(text) => setPassword(text)}
          value={password}
          icon={<Lock size={22} color={'#6b7280'} />}
          isPassword
        />
        <View className='flex-row justify-between items-center w-full px-2 mb-4'>
          <Text className='text-base font-mMedium'>Remember Me</Text>
          <Link
            href={'/auth/forgot-password'}
            className='text-link font-mSemiBold'
          >
            Forgot Password?
          </Link>
        </View>
        <ButtonCustom
          title='Login'
          onPress={handleLogin}
          disabled={!email || !password}
          className='w-80 h-14 mt-2'
          loading={loading}
          icon={<SendHorizontal color={'white'} />}
        />
      </View>
      <View className='flex justify-center items-center gap-4'>
        <Text className='text-xl font-mSemiBold mb-2 text-subText'>OR</Text>
        <Text className='text-2xl font-mBold'>Login with Apple</Text>
        <Text className='text-2xl font-mBold'>Login with Google</Text>
        <View className='flex-row justify-center items-center gap-2 mt-4'>
          <Text className='text-base font-mMedium'>
            Do not have an account?
          </Text>
          <Link href='./auth/register' className='text-link font-mSemiBold'>
            Sign Up
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}
