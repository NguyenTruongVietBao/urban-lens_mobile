import DrawerToggleCustom from '@/components/drawer-toggle';
import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 px-6'>
      <View className='flex-row items-center justify-between'>
        <View>
          <DrawerToggleCustom />
        </View>
        <View>
          <Text>Ho Chi Minh</Text>
        </View>
        <View>
          <Text>Notifications</Text>
        </View>
      </View>
      <View className='flex-row items-center justify-between'>
        <View className='w-2/3'>
          <Text>Search</Text>
        </View>
        <View className='w-1/3'>
          <Text>Filter</Text>
        </View>
      </View>
      <View className='flex-row items-center justify-between'>
        <View>
          <Text>Upcoming Events</Text>
        </View>
        <View>
          <Text>All Events</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
