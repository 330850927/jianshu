import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {
    WriterWrapper,
    WriterTitle,
    WriterChange,
    WriterContent,
    WriterItem,
    WriterName,
    WriterLike,
    WriterDis,
    WriterMore
} from '../style';

class Writer extends PureComponent{
    getListArea(){
        const {list,page} = this.props;
        const jsList=list.toJS();
        const pageList=[];
        if(jsList.length){
           for( let i=(page-1)*5;i<page*5;i++){
                pageList.push(
                    <WriterItem key={jsList[i].id}>
                        <img src={jsList[i].imgUrl} alt=""/>
                        <WriterName>
                            {jsList[i].writerName}
                            <WriterLike>+关注</WriterLike>
                        </WriterName>
                        <WriterDis>
                            写了{(jsList[i].writeNumber/1000).toFixed(2)}K字 · {(jsList[i].writerLoved/1000).toFixed(2)}K人喜欢
                        </WriterDis>
                    </WriterItem>
                );
            }
            return pageList;
        }
    }
    render(){
        const {handleChange,page,totalPage} = this.props;
        return(
            <WriterWrapper>
                <WriterTitle>
                    推荐作者
                    <WriterChange onClick={()=>handleChange(this.spinIcon,page,totalPage)}>
                        <i ref={(icon)=>{this.spinIcon=icon}} className='iconfont spin'>&#xe6e1;</i>
                        换一批
                    </WriterChange>
                </WriterTitle>
                <WriterContent>
                    {this.getListArea()}
                </WriterContent>
                <WriterMore>
                    查看全部&nbsp;&nbsp;>
                </WriterMore>
            </WriterWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','writerList']),
    page:state.getIn(['home','page']),
    totalPage:state.getIn(['home','totalPage']),
});
const mapDispatch=(dispatch)=>{
    return{
        handleChange(spin,page,totalPage){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10);
            }else{
                originAngle=0;
            }
            spin.style.transform='rotate('+(originAngle+360)+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }

        }
    }
};
export default connect(mapState,mapDispatch)(Writer);
