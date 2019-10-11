import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
// import PigTailLoad from './components/PigTailLoad.jsx';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export default class App extends React.Component {

  state = {
    isSplashReady: false,
    isAppReady: false
  }



  render() {



    
    if(!this.state.isSplashReady){
      return (
        <AppLoading
          startAsync={this._cacheSplashResourcesAsync}
          onFinish={() => this.setState({ isSplashReady: true })}
          onError={console.warn}
          autoHideSplash={false}
        />
      );
    }

     if(!this.state.isAppReady){
      return(
        <View style={{flex: 1, 
          resizeMode: "contain"}}>
        <Image style={{width: 200, height: 200}}
          source={require('./assets/loadingPig.png')} 
          onLoad={this._cacheResourcesAsync}  />
        {/* <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: RotateData }],
          }}
          source={require('../assets/loadingPig.png')}
        /> */}
      </View>
        // <View>
        //   <PigTailLoad 
        //     onLoad={this._cacheResourcesAsync} 
        //   />
        //   <text>Test</text>
        // </View>
      )

    }

  return (
        <View>
          <Image 
            style ={{flex: 1, width: 200, height: 200, 
            resizeMode: "contain"}}
           source={require('./assets/splash.png')}
          />
        </View>
      );

      
  }
    




_cacheSplashResourcesAsync = async ()=>{
  const comp = require('./assets/loadingPig.png')
  // const comp = require('./components/PigTailLoad');
  return Asset.fromModule(comp).downloadAsync();

}

_cacheResourcesAsync = async () => {
  SplashScreen.hide();
  const images = [
    require('./assets/splash.png')
  ];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(cacheImages);
  this.setState({ isAppReady: true });
};

}