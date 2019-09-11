import * as constants from "./constants";
import {fromJS} from 'immutable';
const defaultState=fromJS({
    page:1,
    totalPage:1,
    articlePage:1,
    showScroll:false,
    topicList:[],
    articleList:[],
    writerList:[],
    recommendList:[]
});
const changeHomeData=(state,action)=>{
    return state.merge({
        writerList:fromJS(action.writerList),
        topicList:fromJS(action.topicList),
        articleList:fromJS(action.articleList),
        recommendList:fromJS(action.recommendList),
        totalPage:fromJS(action.totalPage)
    });
};
const changePage=(state,action)=>{
    return state.set('page',fromJS(action.page));
};
const toggleTopShow=(state,action)=>{
    return state.set('showScroll',fromJS(action.show));
};
const addMoreList=(state,action)=>{
    return state.merge({
        articleList:state.get('articleList').concat(fromJS(action.articleList)),
        articlePage:fromJS(action.nextPage)
    });
};
export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANGE_HOME_DATA:
            return changeHomeData(state,action);
        case constants.CHANGE_PAGE:
            return changePage(state,action);
        case constants.TOGGLE_TOP_SHOW:
            return toggleTopShow(state,action);
        case constants.ADD_MORE_LIST:
            return addMoreList(state,action);
        default:
            return state;
    }
}
