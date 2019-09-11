import * as constants from "./constants";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    title:'',
    content:''
});
const changeDetail=(state,action)=>{
    return state.merge({
        title:fromJS(action.title),
        content:fromJS(action.content),
    });
};
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_DETAIL:
            return changeDetail(state,action);
        default:
            return state;
    }
}
