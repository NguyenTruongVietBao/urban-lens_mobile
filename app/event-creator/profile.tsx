import { useAuthStore } from '@/stores/useAuthStore';
import React from 'react';
import { Text, View } from 'react-native';

export default function Profile() {
  const { user } = useAuthStore();
  console.log('🚀 ~ Profile ~ user:', user);
  return (
    <View>
      <Text>{user?.name}</Text>
    </View>
  );
}
