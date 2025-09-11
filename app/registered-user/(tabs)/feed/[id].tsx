import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function FeedDetail() {
  const { id } = useLocalSearchParams();
  console.log('id', id);
  return (
    <View className='flex-1 items-center justify-center'>
      <Text>FeedDetail</Text>
      <Text>ID: {id}</Text>
    </View>
  );
}
