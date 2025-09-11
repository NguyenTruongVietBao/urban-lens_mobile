import Drawer from 'expo-router/drawer';
import { Home, Settings } from 'lucide-react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView className='flex-1'>
      <Drawer>
        <Drawer.Screen
          name='(tabs)'
          options={{
            headerShown: false,
            title: 'Home',
            drawerIcon: () => <Home />,
          }}
        />
        <Drawer.Screen
          name='setting'
          options={{
            drawerLabel: 'Setting',
            title: 'Setting',
            drawerIcon: () => <Settings />,
          }}
        />
        <Drawer.Screen
          name='support'
          options={{
            drawerLabel: 'Support',
            title: 'Support',
            drawerIcon: () => <Settings />,
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
