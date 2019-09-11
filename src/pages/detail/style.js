import styled from 'styled-components';

export const DetailWrapper=styled.div`
    position:absolute;
    left:0;
    right:0;
    bottom:0;
    top:56px;
    background:#f7f7f7;
`;
export const DetailContent=styled.div`
        width:1000px;
       padding:0 16px;
       margin:20px auto;
       overflow:hidden;
`;
export const DetailLeft=styled.div`
    float:left;
    width:730px;
    margin-bottom:24px;
    margin-right:10px;
    font-size:16px;
    border-radius:5px;
    background:#fff;
    padding:24px;
    box-sizing:border-box;
`;
export const DetailRight=styled.div`
    float:right;
    width:260px;
    background:#fff;
    height:600px;
`;
export const Header=styled.p`
    font-size:30px;
    font-weight:700;
    word-break:break-word;   
    color:#404040;
    text-rendering:optimizelegibility;
    margin-bottom:30px;
`;
export const LeftContent=styled.div`
    color:#404040;
    >img{
        max-width:100%;
    }
    >p{
        font-size:16px;
        font-weight:400;
        margin:25px 0;
        line-height:28px;
    }
`;
