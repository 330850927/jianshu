import * as constants from './constants';
import {fromJS} from 'immutable';
import axios from "axios";

const changeList=(data)=>({
    type:constants.CHANGE_LIST,
    data:fromJS(data),
    totalPage:Math.ceil(data.length/10)
});
export const searchFocus=()=>({
    type:constants.SEARCH_FOCUS
});
export const searchBlur=()=>({
    type:constants.SEARCH_BLUR
});
export const onMouseIn=()=>({
    type:constants.ONMOUSE_IN
});
export const onMouseLeave=()=>({
   type:constants.ONMOUSE_LEAVE
});
export const changePage=(page)=>({
    type:constants.CHANGE_PAGE,
    page:fromJS(page)
});
export const getList= ()=>{
    return(dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data=res.data;
            dispatch(changeList(data.data));
        }).catch((err)=>{
            console.log(err);
        });
    }
};
