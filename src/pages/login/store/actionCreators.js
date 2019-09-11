import * as constants from './constants';
import axios from 'axios';
export const changeLogin=()=>({
    type:constants.CHANGE_LOGIN,
    login:true
});
export const logout=()=>({
    type:constants.CHANGE_LOGOUT,
    logout:false
});
export const login = (account,password)=>{
    return(dispatch)=>{
        axios.get('/api/login.json?account='+account+'&password='+password).then((res)=>{
            const result=res.data.data;
            if(result){
                dispatch(changeLogin());
            }else{
                alert('登录失败');
            }
        })
    }
};
