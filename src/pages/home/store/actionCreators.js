import * as constants from './constants';
import axios from 'axios';
export const changeHomeData=(result)=>({
    type:constants.CHANGE_HOME_DATA,
    writerList:result.writerList,
    topicList:result.topicList,
    articleList:result.articleList,
    recommendList:result.recommendList,
    totalPage:Math.ceil(result.writerList.length/5)
});
export const addHomeList=(result,nextPage)=>({
    type:constants.ADD_MORE_LIST,
    articleList:result,
    nextPage
});
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:page
});
export const toggleTopShow=(show)=>({
    type:constants.TOGGLE_TOP_SHOW,
    show
});
export const getHomeData=()=>{
    return(dispatch)=>{
        axios.get('/api/home.json').then((res)=>{
            const result=res.data.data;
            dispatch(changeHomeData(result));
        }).catch((err)=>{
            alert('更多作者信息列表未获得');
        });
    }
};
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json?page='+page).then((res)=>{
            const result=res.data.data;
            dispatch(addHomeList(result,page+1));
        }).catch((err)=>{
            alert('更多信息列表未获得');
        });
    }
};
