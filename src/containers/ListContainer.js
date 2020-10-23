import React from 'react'
import {List} from '../screens/List';
import {connect} from 'react-redux'
import {changeList} from "../store/actions";
import axios from 'axios';

class ListContainer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
        this.getData = this.getData.bind(this)
        this.getData()
    }

    getData(){
        axios.get('https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0')
            .then(res => {
                let list = []
                for(let elem in res.data){
                    list.push({
                        author: res.data[elem].user.name,
                        previewImg: res.data[elem].urls.thumb,
                        title: res.data[elem].alt_description,
                        img: res.data[elem].urls.regular
                    })
                }
                this.props.changeList(list)
                this.setState({list: this.props.list})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return <List nav={this.props.navigation.navigate} list={this.state.list} />;
    }
}

const mapStateToProps = state => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = {
    changeList
}

export default connect(mapStateToProps, mapDispatchToProps)(ListContainer)
