import React from 'react';
import { View, StyleSheet, Image, StatusBar } from 'react-native';
// import PigTailLoad from './components/PigTailLoad.jsx';
import { AppLoading, SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

import EntryScreen from "./components/EntryScreen"

const styles = StyleSheet.create({
  mainView: {
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "contain",
    flex: 1
  },
  pigpic: {
    width: 400,
    height: 400
  }
})

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

        <View style={styles.mainView}>
          <StatusBar hidden />
          <Image style={styles.pigpic}
            source={require('./assets/StartScreen.png')} 
            onLoad={this._cacheResourcesAsync}  />
        </View>
      )

    }

  return (
    <View style={styles.mainView}>
      <StatusBar hidden />
      <EntryScreen />
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
    require('./assets/StartScreen.png')
  ];

  const cacheImages = images.map(image => {
    return Asset.fromModule(image).downloadAsync();
  });

  await Promise.all(cacheImages);
  this.setState({ isAppReady: true });
};

}