import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Topic from './cpmponnet/Topic';
import List from './cpmponnet/List';
import Recommend from './cpmponnet/Recommend';
import Writer from './cpmponnet/Writer';
import { actionCreators } from './cpmponnet/store';

import { 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  Backtop
} from "./style";

class Home extends PureComponent {
  handleScrollTop () {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft> 
          <img  alt="" className="banner-img" src="https://upload.jianshu.io/admin_banners/web_images/4573/e357f52ee3c4596564c8c59a889b73aea271442e.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
          <Topic></Topic>
          <List></List>
        </HomeLeft>

        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>

        { this.props.showScroll ? <Backtop onClick= {this.handleScrollTop }>回到顶部</Backtop> : null }
        {/* <Backtop onClick= {this.handleScrollTop }>回到顶部</Backtop> */}
      </HomeWrapper>
    )
  }
  componentWillMount() {
    this.props.changeHomeDate();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
 })

const mapDispatch = (dispatch) => ({
  changeHomeDate() {
    dispatch(actionCreators.getHoneInfo());
  },
  changeScrollTopShow (e) {
    if ( document.documentElement.scrollTop > 100 ) {
      dispatch(actionCreators.toogleTopShow(true))
    }else {
      dispatch(actionCreators.toogleTopShow(false))
    }
  }
})

export default connect(mapState, mapDispatch)(Home);