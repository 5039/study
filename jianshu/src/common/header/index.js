import React, {Component } from 'react';
import  { actionCreators } from './store/';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { Link } from "react-router-dom";
import {
	HeanderWrapper,
	Logo,
	Nav,
	NavItem,
	NavSearch,
	Addition,
	Button,
	SearchWrapper,
	SearchInfoTitle,
	SearchInfo,
	SearchInfoSwitch,
	SearchInfoItem,
	SearchInfoList
} from './style';

// 无状态组件
// const Header = (props) => {
// }
// 无状态组件结束

class Header extends Component {
	getActiveItem =()=> {
    const { focused, list ,listpage, mouseIn,listtotalpage, handleMouseEnter, handleMouseLeave, hendleChangePage } = this.props;
    const newList = list.toJS();
    const pagelist = [];
    if( newList.length ) {
      for (let i = (listpage - 1 ) * 10; i < listpage * 10; i++ ) {
        pagelist.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        )
      }
    }
		if (focused || mouseIn) {
			return (
        <SearchInfo 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={ handleMouseLeave }
        >
					<SearchInfoTitle>
					热门搜索
					<SearchInfoSwitch onClick={() => hendleChangePage(listpage, listtotalpage, this.spinIcon) }>
          <i ref= { (icon) => { this.spinIcon = icon }} className="iconfont spin">&#xe851;</i>
          换一批</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
            {/* {
              // list.map( (item)=> {
              //   return <SearchInfoItem key={item}>{item}</SearchInfoItem>
              // })
              
            } */}
            {pagelist}
					</SearchInfoList>
				</SearchInfo>
			)
		}else {
			return null
		}
	}

	render() {
    const {focused, handleInputFocus, handleInputBlur, list, login } = this.props;
    return (
      <HeanderWrapper>
        <Link to="/">
          <Logo></Logo>
        </Link>
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          {
            login ? <NavItem className="right">退出</NavItem> : <Link to="/login"><NavItem className="right">登陆</NavItem></Link>
          }
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              timeout={200}
              in={focused}
              classNames="slide"
            >
              <NavSearch
                className={focused? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'} >&#xe601;</i>
            {this.getActiveItem()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="reg">注册</Button>
          <Button className="witting">
            <i className="iconfont">&#xe600;</i>
            写文章
          </Button>
        </Addition>
      </HeanderWrapper>
    )
	}
}

const mapStateToProps = (state) => {
	return {
		//.get('focused') 获取 immoutable 对象的值
		// focused: state.get("header").get("focused")
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header','list']),
    listtotalpage: state.getIn(['header','listtotalpage']),
    listpage: state.getIn(['header','listpage']),
    mouseIn: state.getIn(['header','mouseIn']),
    login: state.getIn(['login', 'login'])
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreators.getList());
      }
			dispatch(actionCreators.searchFocus());
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave() {
      dispatch(actionCreators.MouseLeave())
    },
    hendleChangePage(listpage,listtotalpage, spin) {
      // spin.style.transform = "rotate(0deg)";
      let orginAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if ( orginAngle ) {
        orginAngle = parseInt(orginAngle, 10);
      }else {
        orginAngle = 0 ;
      }
      spin.style.transform = "rotate(" + (orginAngle + 360 ) + "deg)";
      if ( listpage < listtotalpage ) {
        dispatch(actionCreators.changePage(listpage + 1 ))
      }else {
        dispatch(actionCreators.changePage(1))
      }

      // dispatch(actionCreators.changePage())
    }
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);