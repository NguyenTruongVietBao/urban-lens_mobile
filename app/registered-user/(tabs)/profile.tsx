import ButtonCustom from '@/components/common/button-custom';
import Header from '@/components/common/header';
import { useAuthStore } from '@/stores/useAuthStore';
import { useRouter } from 'expo-router';
import { Edit, LogOut } from 'lucide-react-native';
import React from 'react';
import { Button, Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const router = useRouter();
  const { logout, resetOnboarding, user } = useAuthStore();
  console.log('🚀 ~ Profile ~ user:', user);
  return (
    <SafeAreaView className='flex-1'>
      <Header onBack={() => router.back()} title='Profile' />
      <View className='flex items-center justify-center gap-2 my-10'>
        <Image
          source={{ uri: user?.avatar.replace('svg', 'png') }}
          className='w-36 h-36 rounded-full'
        />
        <View>
          <Text className='text-3xl font-mSemiBold mt-6'>{user?.name}</Text>
        </View>
        <View className='flex-row items-center justify-center gap-2 my-4'>
          <Text className='text-xl font-mSemiBold'>{user?.name}</Text>
          <Text className='text-xl font-mSemiBold'>{user?.name}</Text>
        </View>
        <View>
          <ButtonCustom
            title='Edit Profile'
            onPress={() => {
              router.push('/registered-user/profile');
            }}
            mode='outline'
            className='w-64 h-14 mt-2'
            icon={<Edit size={22} color={'#3B82F6'} />}
          />
          <ButtonCustom
            title='Logout'
            onPress={() => {
              logout();
            }}
            className='w-80 h-14 mt-2'
            icon={<LogOut size={22} color={'white'} />}
          />
        </View>
      </View>
      <Button
        title='Reset Onboarding'
        onPress={() => {
          resetOnboarding();
        }}
      />
    </SafeAreaView>
  );
}
