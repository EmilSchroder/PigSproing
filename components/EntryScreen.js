import React from 'react';
import { ImageBackground,  StyleSheet, Text } from 'react-native';

const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%'
    }
})

class EntryScreen extends React.Component {
    render(){
        return(
            <React.Fragment>
                <ImageBackground
                    source={require('../assets/StartScreen.png')}
                    style={style.backgroundImage}
                >
                </ImageBackground>
            </React.Fragment>

        )
    }
}

export default EntryScreen