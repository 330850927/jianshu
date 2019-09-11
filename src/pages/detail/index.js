import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store'
import {
    DetailWrapper,
    DetailContent,
    Header,
    DetailLeft,
    DetailRight,
    LeftContent
} from "./style";

class Detail extends PureComponent{
    render(){
        const {title,content}=this.props;
        return(
            <DetailWrapper>
                <DetailContent>
                    <DetailLeft>
                        <Header>{title}</Header>
                        <LeftContent dangerouslySetInnerHTML={{__html:content}}/>
                    </DetailLeft>
                    <DetailRight>
                        右侧
                    </DetailRight>
                </DetailContent>
            </DetailWrapper>
        )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
    }
}
const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content']),
});
const mapDispatch=(dispatch)=>({
    getDetail(id){
        dispatch(actionCreators.getDetail(id))
    }
});
export default connect(mapState,mapDispatch)(withRouter(Detail));
