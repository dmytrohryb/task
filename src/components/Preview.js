import React from 'react';
import {Dimensions, Image, View, Text, StyleSheet, TouchableNativeFeedback} from 'react-native';

const styles = StyleSheet.create({
    prevImg: {
        width: 50,
        height: 50
    },
    preview:{
        marginTop: 5,
        flexDirection: 'row'
    },
    separator:{
        opacity: 0.5,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    text: {
        flexDirection: 'column',
        marginLeft: 10,
        width: Dimensions.get('window').width - 60 // ширина экрана минус ширина картинки с учетом отступа
    }
});

export class Preview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rippleColor: this.hexColor(),
            rippleOverflow: false
        }
        this.hexColor = this.hexColor.bind(this)
    }

    hexColor() {
        return 'dark'
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={() => {
                    this.setState({rippleColor: this.hexColor(), rippleOverflow: this.state.rippleOverflow})
                    this.props.nav('View', {img: this.props.img})
                }}
                background={TouchableNativeFeedback.Ripple(this.hexColor(), this.state.rippleOverflow)}
            >

                <View style={styles.preview}>
                    <Image
                        style={styles.prevImg}
                        source={{uri: this.props.previewImg}}
                    />
                    <View style={styles.text}>
                        <Text>Author: {this.props.author}</Text>
                        <Text>Title: {this.props.title}</Text>
                    </View>
                </View>

            </TouchableNativeFeedback>
        );
    }
}
