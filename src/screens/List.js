import React from 'react'
import {View, ScrollView, Text} from 'react-native';
import axios from 'axios';
import {Preview} from '../components/Preview';

export class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <>
            <ScrollView>
                {
                    this.props.list.map((l, i) => (
                        <Preview
                            key={i}
                            title={l.title}
                            author={l.author}
                            previewImg={l.previewImg}
                            img={l.img}
                            nav={this.props.nav}
                        />
                    ))
                }
            </ScrollView>
            </>
    }
}
