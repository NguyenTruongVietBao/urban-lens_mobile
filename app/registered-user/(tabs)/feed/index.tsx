import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

export default function FeedHome() {
  return (
    <View className='flex-1 items-center justify-center'>
      <Link href='./feed/1'>Feed 1</Link>
      <Link href='/registered-user/outside'>Outside</Link>
      <Text>Feed 3</Text>
      <Text>Feed 4</Text>
      <Text>Feed 5</Text>
      <Text>Feed 6</Text>
      <Text>Feed 7</Text>
      <Text>Feed 8</Text>
    </View>
  );
}
