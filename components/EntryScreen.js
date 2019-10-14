import React from 'react';
import { ImageBackground,  StyleSheet, Text, TouchableOpacity } from 'react-native';

const style = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
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
                    <Text>Pig Sproing</Text>
                    <TouchableOpacity><Text>New Game</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Stats</Text></TouchableOpacity>
                    <TouchableOpacity><Text>Settings</Text></TouchableOpacity>
                </ImageBackground>
            </React.Fragment>

        )
    }
}

export default EntryScreen