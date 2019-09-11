import styled from "styled-components";
import logoPic from '../../statics/logo.png';
export const HeaderAll = styled.div `
    border-bottom:1px solid #f3f3f3;
`
export const HeaderWrapper = styled.div `
    position:relative;
    height:56px;
    max-width:1440px;
    margin:0 auto;
    min-width:768px;
    background:#fff;
`;
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic}) no-repeat center;
    background-size:100%;
`;
export const Nav=styled.div`
    width:1032px;
    height:100%;
    padding-right:20px;
    box-sizing:border-box;
    margin:0 auto;
`;
export const Navitem=styled.div`
    cursor:pointer;
    &.left{
        float:left;
    }
    &.hover:hover{
        background:#F5F5F5;
    }
    &.active{
        color:#ea6f5a;
    }
    &.right{
        float:right;
        color:#969696;
    }
    padding:0 15px;
    line-height:56px;
    font-size:17px;
    color:#333;
`;
export const SearchWrapper = styled.div `
    float:left;
    position:relative;
    >.iconfont{
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        text-align:center;
        line-height:32px;
        font-size:18px;
        &.focused{
        background:#777;
        color:#fff;
        }
    }
`;
export const SearchInFo=styled.div`
    position:absolute;
    z-index:10;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px 10px;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    background:#fff;
`;
export const SearchInFoTitle = styled.div`
    margin-top:20px;
    margin-bottom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const SearchInFoSwitch=styled.span`
    float:right;
    font-size:14px;
    .spin{
    font-size:12px;
    display:block;
    float:left;
    margin-right:5px;
    transition:all 0.2s ease-in;
    transform-origin:center center;
    }
    :hover{
        color:#000;
        cursor:pointer;
    }
`;
export const SearchInFoItem=styled.a`
    font-size:12px;
    padding:0 5px;
    line-height:20px;
    border:1px solid #ddd;
    color:#787878;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
`;
export const NavSearch =styled.input.attrs({
    placeholder:"搜索",
})`
    width:160px;
    height:38px;
    margin-top:9px;
    padding:0 32px 0 20px;
    box-sizing:border-box;
    border:0;
    outline:0;
    border-radius:19px;
    background:#eee;
    font-size:14px;
    margin-left:20px;
    color:#777;
    &.slide-enter{
        transition:all 0.2s ease-out;
    }
    &.slide-enter-active{
        width:240px;
    }
    &.slide-exit{
        transition:all 0.2s ease-out;
    }
    &.slide-exit-active{
        width:160px;
    }
    $::placeholder{
        color:#999;
    }
    &.focused{
        width:240px;
    }
`;
export const Addition=styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;
`;
export const Button=styled.div`
    &.reg{
        background:#ec6149;
        color:#fff;
    }
    float:right;
    line-height:38px;
    border-radius:19px;
    margin-top:9px;
    border:1px solid #ec6149;
    margin-right:20px;
    padding:0 20px;
    color:#ec6149;
    font-size:14px;
`;
