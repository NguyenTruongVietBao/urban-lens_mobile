import { Stack } from 'expo-router';
import React from 'react';

export default function FeedLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' options={{ title: 'Feed' }} />
      <Stack.Screen
        name='[id]'
        options={{ headerShown: true, title: 'Feed Detail' }}
      />
    </Stack>
  );
}
