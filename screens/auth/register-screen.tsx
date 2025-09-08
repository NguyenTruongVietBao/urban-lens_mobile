import ButtonCustom from '@/components/common/button-custom';
import HeaderMini from '@/components/common/header-mini';
import InputCustom from '@/components/common/input-custom';
import { Link, router } from 'expo-router';
import {
  Lock,
  Mail,
  SendHorizontal,
  Smartphone,
  User,
} from 'lucide-react-native';
import React, { useState } from 'react';
import { ImageBackground, Text, View } from 'react-native';

export default function RegisterScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      className='flex-1 bg-white px-4 justify-center items-center py-28'
      resizeMode='cover'
    >
      <HeaderMini
        onBack={() => router.back()}
        title=''
        className='max-w-96 mb-6'
      />
      <View className='flex-1 justify-start items-center gap-6 w-96'>
        <View className='w-full flex justify-start mb-4'>
          <Text className='text-4xl font-mSemiBold'>Register</Text>
        </View>
        <InputCustom
          placeholder='Full name'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
          icon={<User size={22} color={'#6b7280'} />}
        />
        <InputCustom
          placeholder='example@gmail.com'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
          icon={<Mail size={22} color={'#6b7280'} />}
        />
        <InputCustom
          placeholder='Phone number'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
          icon={<Smartphone size={22} color={'#6b7280'} />}
        />
        <InputCustom
          placeholder='Your Password'
          keyboardType='default'
          onChangeText={(text) => setPassword(text)}
          value={password}
          icon={<Lock size={22} color={'#6b7280'} />}
          isPassword
        />
        <InputCustom
          placeholder='Confirm Password'
          keyboardType='default'
          onChangeText={(text) => setPassword(text)}
          value={password}
          icon={<Lock size={22} color={'#6b7280'} />}
          isPassword
        />

        <ButtonCustom
          title='REGISTER'
          onPress={() => {}}
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
          <Link href='/auth/register' className='text-link font-mSemiBold'>
            Sign Up
          </Link>
        </View>
      </View>
    </ImageBackground>
  );
}
