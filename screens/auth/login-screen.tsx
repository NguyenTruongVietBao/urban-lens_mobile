import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        showsUserLocation
        showsMyLocationButton
        initialRegion={{
          latitude: 21.0278,
          longitude: 105.8342,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 21.0278, longitude: 105.8342 }}
          title="Hà Nội"
          description="Thủ đô Việt Nam"
        />
      </MapView>
    </View>
    // <View className="flex-1 justify-center items-center">
    //   <Text>LoginScreen </Text>
    //   <Link asChild href="/auth/register-model">
    //     <Button title="Sign Up" />
    //   </Link>
    //   <ThemeToggle />
    // </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
