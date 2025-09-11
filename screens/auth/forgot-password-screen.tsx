import ButtonCustom from '@/components/common/button-custom';
import HeaderMini from '@/components/common/header-mini';
import InputCustom from '@/components/common/input-custom';
import { useRouter } from 'expo-router';
import { Mail, Send } from 'lucide-react-native';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [loading, setLoading] = React.useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setEmail('');
      router.push(`/auth/verify-email?email=${email}`);
    }, 2000);
  };

  return (
    <SafeAreaView className='flex-1 bg-white px-6 justify-center items-center'>
      <HeaderMini
        onBack={() => router.back()}
        title=''
        className='max-w-96 mb-6'
      />
      <View className='flex-1 justify-start items-center gap-6 w-96'>
        <View className='w-full flex justify-start mb-4 gap-2'>
          <Text className='text-3xl  font-mSemiBold'>Forgot Password</Text>
          <Text className='text-subText font-mMedium'>
            Enter your email to receive password reset instructions.
          </Text>
        </View>
        <InputCustom
          placeholder='example@gmail.com'
          keyboardType='email-address'
          onChangeText={(text) => setEmail(text)}
          value={email}
          icon={<Mail size={22} color={'#6b7280'} />}
        />
        <ButtonCustom
          title='SEND'
          onPress={handleLogin}
          disabled={!email}
          className='w-80 h-14'
          loading={loading}
          icon={<Send color={'white'} />}
        />
      </View>
    </SafeAreaView>
  );
}
