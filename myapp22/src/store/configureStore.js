import {createStore} from 'redux';
import rootReducer from '../reducers';


export default function configureStore(iniState){
    return createStore(rootReducer, iniState);
}
