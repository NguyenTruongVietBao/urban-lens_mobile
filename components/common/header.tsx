import { ArrowLeft, EllipsisVertical } from 'lucide-react-native';
import React, { useState } from 'react';
import { Modal, Pressable, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface HeaderProps {
  onBack: () => void;
  title: string;
  className?: string;
  actions?: ActionItem[];
}

interface ActionItem {
  label: string;
  onPress: () => void;
  icon?: React.ReactNode;
}

const Action = ({ items }: { items: ActionItem[] }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View className='relative'>
      {/* Action Button */}
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <EllipsisVertical size={22} />
      </TouchableOpacity>

      {/* Dropdown Modal */}
      <Modal
        transparent
        animationType='fade'
        visible={isOpen}
        onRequestClose={() => setIsOpen(false)}
      >
        {/* Backdrop */}
        <Pressable style={{ flex: 1 }} onPress={() => setIsOpen(false)}>
          <View className='flex-1 bg-black/30' />
        </Pressable>

        {/* Dropdown */}
        <View className='absolute top-12 right-4 bg-white shadow-md rounded-md p-2 z-10'>
          {items.map((item, index) => (
            <TouchableOpacity
              key={index}
              className='flex-row items-center gap-2 px-4 py-2 rounded-md'
              onPress={() => {
                setIsOpen(false);
                item.onPress();
              }}
            >
              {item.icon && <View>{item.icon}</View>}
              <Text className='text-base text-gray-700'>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </View>
  );
};

export default function Header({
  onBack,
  title,
  className,
  actions = [],
}: HeaderProps) {
  return (
    <SafeAreaView
      edges={['top']}
      className={`w-full flex-row items-center justify-between px-4 py-2 ${className}`}
    >
      {/* Back button + title */}
      <View className='flex-row justify-center items-center gap-4'>
        <TouchableOpacity onPress={onBack}>
          <ArrowLeft size={24} />
        </TouchableOpacity>
        <Text className='text-2xl font-mSemiBold text-text'>{title}</Text>
      </View>

      {/* Action Menu */}
      {actions.length > 0 && <Action items={actions} />}
    </SafeAreaView>
  );
}
