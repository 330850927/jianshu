import styled from "styled-components";

export const LoginWrapper=styled.div`
    position:absolute;
    z-index:0;
    left:0;
    right:0;
    bottom:0;
    top:56px;
    background:#eee;
`;
export const LoginBox=styled.div`
    width:400px;
    height:200px;
    margin:100px auto;
    background:#fff;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
    border-radius:10px;
    padding-top:20px;
`;
export const LoginInput=styled.input`
    display:block;
    width:200px;
    height:30px;
    line-height:30px;
    padding:0 10px;
    color:#777;
    margin:20px auto;
`;
export const LoginButton=styled.button`
    width:220px;
    height:35px;
    line-height:35px;
    color:#fff;
    font-size:16px;
    background:#3194d0;
    border-radius:15px;
    margin:20px auto;
    display:block;
    text-align:Center;
    outline:0;
    border:0;
`;
