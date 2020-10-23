import React from 'react';
import {Dimensions, View, Image, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    prevImg: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
});

export class ViewImage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    style={styles.prevImg}
                    source={{uri: this.props.route.params.img}}
                />
            </View>
        );
    }
}
