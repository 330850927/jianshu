import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {actionCreators} from './store';
import {
    LoginWrapper,
    LoginBox,
    LoginInput,
    LoginButton
} from "./style";

class Login extends PureComponent{
    render(){
        const {handleLogin,login}=this.props;
        if (!login){
            return(
                <LoginWrapper>
                    <LoginBox>
                        <LoginInput placeholder="账号" ref={(input)=>{this.account=input}}/>
                        <LoginInput placeholder="密码" ref={(input)=>{this.password=input}} type='password'/>
                        <LoginButton onClick={()=>handleLogin(this.account,this.password)}>登录</LoginButton>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to={'/'}/>
        }

    }

}
const mapState=(state)=>({
    login:state.getIn(['login','login'])
});
const mapDispatch=(dispatch)=>({
    handleLogin(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
});
export default connect(mapState,mapDispatch)(Login);
