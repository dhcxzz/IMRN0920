import React, {useEffect} from 'react';
import {ImageBackground, Image, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Register');
    }, 2000);
  }, []);

  return (
    <View
      style={{
        marginVertical: 200,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <ImageBackground
        source={require('./Oval.jpg')}
        style={{height: 300, width: 300}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-start',
          }}>
          <Image
            source={require('./logo.png')}
            style={{
              width: 250,
              height: 100,
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 100,
              marginHorizontal: 25,
            }}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Splash;
