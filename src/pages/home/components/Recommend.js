import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    RecommendWrapper
} from '../style';
class Recommend extends PureComponent{
    render(){
        const {list}=this.props;
        return(
            <RecommendWrapper>
                {
                    list.map((item)=>(
                        <img key={item.get('id')} src={item.get('imgUrl')} alt={item.get('alt')}/>
                    ))
                }
            </RecommendWrapper>
        )
    }
}
const mapState=(state)=>({
    list:state.getIn(['home','recommendList'])
});
export default connect(mapState,null)(Recommend);
