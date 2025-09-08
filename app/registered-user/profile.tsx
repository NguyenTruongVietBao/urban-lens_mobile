import { useAuthStore } from '@/stores/useAuthStore';
import React from 'react';
import { Button } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Profile() {
  const { logout, resetOnboarding } = useAuthStore();
  return (
    <SafeAreaView>
      <Button
        title='Logout'
        onPress={() => {
          logout();
        }}
      />
      <Button
        title='Reset Onboarding'
        onPress={() => {
          resetOnboarding();
        }}
      />
    </SafeAreaView>
  );
}
