import styled from 'styled-components';
import banner from '../../statics/home/banner.jpg';

export const HomeWrapper = styled.div`
    overflow:hidden;
    width:960px;
    margin:0 auto;
`;
export const HomeLeft = styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
`;
export const HomeRight = styled.div`
    padding-top:25px;
    width:280px;
    float:right;
`;
export const Banner = styled.a`
    display:block;
    width:625px;
    height:270px;
    background:url(${banner});
    background-size:100%;
`;
export const TopicWrapper = styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
    float:left;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    border:1px solid #dcdcdc;
    margin-right:18px;
    color:#333;
    border-radius:4px;
    padding-right:10px;
    margin-bottom:18px;
    .topic-pic{
        height:32px;
        width:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
    
`;
export const ListItem=styled.div`
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    overflow:hidden;
    .listPic{
        width:125px;
        display:block;
        height:100px;
        float:right;
        border-radius:3px;
    }
`;
export const ListInfo=styled.div`
    width:490px;
    float:left;
    .title{
        font-size:18px;
        line-height:27px;
        font-weight:bold;
        color:#333;
        margin-bottom:4px;
    }
    .desc{
        font-size:13px;
        line-height:24px;
        color:#999;
    }
`;
export const RecommendWrapper=styled.div`
    width:100%;
    >img{
     width:100%;
     margin-bottom:4px;
     border-radius:4px;
     min-height:50px;   
    }
`;
export const WriterWrapper=styled.div`
    margin-top:10px;
    border-top:1px solid #ddd;
    padding-top:10px;
`;
export const WriterTitle=styled.div`
    height:20px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`;
export const WriterChange=styled.a`
    display:block;
    float:right;
    .spin{
        float:left;
        display:block;
        font-size:12px;
        margin-right:5px;
        transition:all 0.2s ease-in;
        transform-origin:center center;
    }
`;
export const WriterContent=styled.ul`
    padding:0 0 20px;
`;
export const WriterItem=styled.div`
    height:47px;
    margin-top:15px;
    >img{
        width:48px;
        height:48px;
        float:left;
        border-radius:50%;
        margin-right:10px;
    }
`;
export const WriterName=styled.div`
    padding-top:5px;
    font-size:14px;
    line-height:20px;
    position:relative;
`;
export const WriterLike=styled.a`
    font-size:13px;
    position:absolute;
    z-index:10;
    top:12px;
    right:5px;
    color:#42c02e;
`;
export const WriterDis=styled.div`
    font-size:12px;
    color:#969696;
    margin-top:5px;
`;
export const WriterMore=styled.button`
    outline:0;
    border:1px solid #dcdcdc;
    font-size:13px;
    color:#787878;
    line-height:37px;
    background:#f7f7f7;
    border-radius:4px;
    width:100%;
    box-sizing:border-box;
`;
export const LoadMore=styled.div`
    width:100%;
    height:40px;
    line-height:40px;
    text-align:center;
    background:#a5a5a5;
    border-radius:20px;
    color:#fff;
    margin:30px 0;
    cursor:pointer;
`;
export const BackTop=styled.div`
    position:fixed;
    right:50px;
    bottom:50px;
    width:60px;
    height:60px;
    line-height:60px;
    text-align:center;
    cursor:pointer;
    border:1px solid #ccc;
    font-size:12px;
    .iconfont{
        font-size:28px;
        color:#666;
    }
`;
