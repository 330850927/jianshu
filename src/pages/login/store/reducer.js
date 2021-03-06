import * as constants from './constants';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    login:false
});
export default (state=defaultState,action)=>{
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login',action.login);
        case constants.CHANGE_LOGOUT:
            return state.set('login',action.logout);
        default:
            return state;
    }
}
