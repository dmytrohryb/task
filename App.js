import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {ViewImage} from './src/screens/ViewImage';
import {createStore} from "redux";
import {rootReducer} from './src/store/reducers'
import {Provider} from 'react-redux'
import ListContainer from './src/containers/ListContainer';
import axios from 'axios';

const store = createStore(rootReducer)
const Stack = createStackNavigator();

class App extends React.Component{

    render() {
        return (
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen name="Home" component={ListContainer} />
                        <Stack.Screen name="View">
                            {props => <ViewImage {...props} />}
                        </Stack.Screen>
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
        )
    }
}

export default App;
