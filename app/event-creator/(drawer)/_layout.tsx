import Drawer from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Overview",
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />
    </Drawer>
  );
}
