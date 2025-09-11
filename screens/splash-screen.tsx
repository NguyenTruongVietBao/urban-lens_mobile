import React from 'react';
import { Image, ImageBackground, Text } from 'react-native';

export default function SplashScreenCustom() {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      className='flex-1 bg-white px-4 justify-center items-center'
      resizeMode='cover'
    >
      {/* <LottieView
        source={require('../assets/animations/urban-lottie-1.json')}
        autoPlay
        loop
        style={{ width: '100%', height: 400 }} 
      /> */}
      <Image
        source={require('../assets/images/logo-png.png')}
        className='w-96 h-96'
      />
      <Text className='text-4xl font-mBold mt-4'>Urban Lens</Text>
    </ImageBackground>
  );
}
