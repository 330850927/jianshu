import React,{PureComponent} from 'react';
import {connect} from "react-redux";
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';
import {Link} from 'react-router-dom';
import {
    HeaderWrapper,
    Logo,
    Nav,
    Navitem,
    NavSearch,
    SearchInFo,
    SearchInFoTitle,
    SearchInFoSwitch,
    SearchInFoItem,
    SearchWrapper,
    Addition,
    Button,
    HeaderAll,

} from "./style";

class Header extends PureComponent{
    getListArea(){
        const {focused,list,page,totalPage,mouseIn,handleOnMouse,handleLeave,handleChangePage} = this.props;
        const jsList=list.toJS();
        const pageList=[];
        if(jsList.length){
            for(let i=(page-1)*10;i<page*10;i++){
                pageList.push(
                    <SearchInFoItem key={jsList[i]}>{jsList[i]}</SearchInFoItem>
                );
            }
        }
        if(focused||mouseIn){
            return(
                <SearchInFo
                    onMouseEnter={handleOnMouse}
                    onMouseLeave={handleLeave}
                >
                    <SearchInFoTitle>
                        热门搜索
                        <SearchInFoSwitch onClick={()=> handleChangePage(page,totalPage,this.spinIcon)}>
                            <i ref={(icon)=>{this.spinIcon=icon}} className="iconfont spin">&#xe6e1;</i>
                            换一批
                        </SearchInFoSwitch>

                    </SearchInFoTitle>
                    <div>
                        {pageList}
                    </div>
                </SearchInFo>
            )
        }else{
            return null;
        }
    };
    render(){
        const {focused,handleInputFocus,handleInputBlur,list,login,handleLogout} = this.props;
        return(
            <HeaderAll>
                <HeaderWrapper>
                    <Link to='/'>
                        <Logo/>
                    </Link>
                    <Nav>
                        <Navitem className='left active'>首页</Navitem>
                        <Navitem className='left hover'>下载App</Navitem>
                        {
                            login?
                                <Navitem onClick={handleLogout} className='right'>退出</Navitem>
                                :
                                <Link to={'/login'}>
                                    <Navitem className='right'>登录</Navitem>
                                </Link>
                        }
                        <Navitem className='right'>
                            <i className="iconfont">&#xe636;</i>
                        </Navitem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={200}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused?'focused':''}
                                    onFocus={()=>handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                ></NavSearch>
                            </CSSTransition>
                            <i className={focused?'focused iconfont':'iconfont'}>
                                &#xe614;
                            </i>
                            {this.getListArea()}
                        </SearchWrapper>
                    </Nav>
                    <Addition>
                        <Link to={'/write'}>
                            <Button className="reg">
                                <i className="iconfont">&#xe61e;</i>
                                写文章
                            </Button>
                        </Link>
                        <Button>注册</Button>
                    </Addition>
                </HeaderWrapper>
            </HeaderAll>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        focused: state.getIn(['header','focused']),
        list:state.getIn(["header","list"]),
        page:state.getIn(["header","page"]),
        totalPage:state.getIn(["header","totalPage"]),
        mouseIn:state.getIn(["header","mouseIn"]),
        login:state.getIn(['login','login'])
    }
};
const mapDispatchToProps=(dispatch)=>{
    return{
        handleLogout(){
            dispatch(loginActionCreators.logout());
        },
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur());
        },
        handleOnMouse(){
            dispatch(actionCreators.onMouseIn());
        },
        handleLeave(){
            dispatch(actionCreators.onMouseLeave());
        },
        handleChangePage(page,totalPage,spin){
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
export default connect(mapStateToProps,mapDispatchToProps)(Header);
