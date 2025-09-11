import { Tabs } from 'expo-router';
import React from 'react';

export default function EventCreatorLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name='home' />
      <Tabs.Screen name='profile' />
    </Tabs>
  );
}
