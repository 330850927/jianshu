import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import Topic from './components/Topic';
import {actionCreators} from "./store";
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {BackTop} from './style';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    Banner
} from './style';

class Home extends PureComponent{
    render(){
        return(
            <HomeWrapper>
                <HomeLeft>
                    <Banner/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Writer/>
                </HomeRight>
                {this.props.show?
                    <BackTop onClick={this.handleScrollTop}>
                        <i className='iconfont'>&#xe67e;</i>
                    </BackTop>
                    :null
                }
            </HomeWrapper>
        )
    }
    handleScrollTop(){
        window.scrollTo(0,0);
    };
    componentDidMount(){
        this.props.changeHomeData();
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    };
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    };

}
const mapState=(state)=>({
    show:state.getIn(['home','showScroll'])
});
const mapDispatch=(dispatch)=>({
    changeHomeData(){
        dispatch(actionCreators.getHomeData());
    },
    changeScrollTopShow(){
        if(document.documentElement.scrollTop>150){
            dispatch(actionCreators.toggleTopShow(true))
        }else{
            dispatch(actionCreators.toggleTopShow(false))
        }
    }
});
export default connect(mapState,mapDispatch)(Home);
