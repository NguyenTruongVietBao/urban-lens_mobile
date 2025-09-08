import { ArrowLeft } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

interface HeaderMiniProps {
  onBack: () => void;
  title: string;
  className?: string;
}

export default function HeaderMini({
  onBack,
  title,
  className,
}: HeaderMiniProps) {
  return (
    <View
      className={`w-full flex-row items-center justify-between ${className}`}
    >
      <TouchableOpacity onPress={onBack}>
        <ArrowLeft size={24} color='#09101D' />
      </TouchableOpacity>
      <Text className='text-lg font-mSemiBold text-text'>{title}</Text>
      <View />
    </View>
  );
}
