
import React from 'react';
import { StyleSheet, View, Animated, Image, Easing } from 'react-native';

class PigTailLoad extends React.Component {
  constructor() {
    super()
    // this.RotateValueHolder = new Animated.Value(0);
  }

  // componentDidMount() {
  //   this.StartImageRotateFunction();
  // }
  // StartImageRotateFunction() {
  //   this.RotateValueHolder.setValue(0);
  //   Animated.timing(this.RotateValueHolder, {
  //     toValue: 1,
  //     duration: 3000,
  //     easing: Easing.easeinout,
  //   }).start(() => this.StartImageRotateFunction());
  // }

  render() {
    // const RotateData = this.RotateValueHolder.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['0deg', '360deg'],
    // });
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/loadingPig.png')} />
        {/* <Animated.Image
          style={{
            width: 200,
            height: 200,
            transform: [{ rotate: RotateData }],
          }}
          source={require('../assets/loadingPig.png')}
        /> */}
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default PigTailLoad