import { DrawerToggleButton } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';

export default function DrawerToggleCustom({
  className,
}: {
  className?: string;
}) {
  return (
    <View className={`${className}`}>
      <View className='max-w-16 border border-red-300'>
        <DrawerToggleButton
        // imageSource={require('../../../assets/images/logo-png.png')}
        />
      </View>
    </View>
  );
}
