import ButtonCustom from '@/components/common/button-custom';
import HeaderMini from '@/components/common/header-mini';
import OTPInput from '@/components/common/input-otp-custom';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Send } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Toast from 'react-native-toast-message';

export default function VerifyEmailScreen() {
  const email = useLocalSearchParams().email as string;
  console.log('email', email);
  const router = useRouter();
  const [token, setToken] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleVerify = (otp: string) => {
    console.log('OTP 4 Complete:', otp);

    setTimeout(() => {
      setLoading(false);
      Toast.show({
        type: 'success',
        text1: 'Verified Successfully',
        text2: 'You can now log in.',
      });
      router.replace('/auth/login');
    }, 1000);
  };

  return (
    <View className='flex-1 bg-white px-6 justify-center items-center py-20'>
      <HeaderMini
        onBack={() => router.back()}
        title=''
        className='max-w-96 mb-6'
      />
      <View className='flex-1 justify-start items-center gap-6 w-96'>
        <View className='w-full flex justify-start mb-4 gap-2'>
          <Text className='text-3xl  font-mSemiBold'>Verification</Text>
          <Text className='text-subText font-mMedium'>
            We have sent a verification code to email:{' '}
            <Text className='font-mSemiBold'>{email}</Text>
          </Text>
        </View>
        <OTPInput
          length={4}
          value={token}
          onChange={setToken}
          disabled={false}
          autoFocus={true}
          className='px-4'
          testID='login-otp'
        />
        <ButtonCustom
          title='SEND'
          onPress={() => handleVerify(token)}
          disabled={token.length < 4 || loading}
          className='w-80 h-14'
          loading={loading}
          icon={<Send color={'white'} />}
        />
      </View>
    </View>
  );
}
