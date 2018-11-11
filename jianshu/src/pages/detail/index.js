import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreators } from './store';
import {
    DetaiWrapper,
    Headers,
    Content
} from './style';

class Detail extends Component {
    
    render() {
        return ( 
         <DetaiWrapper>
             <Headers>{ this.props.title }</Headers>
             <Content dangerouslySetInnerHTML= {{ __html: this.props.content}} />
         </DetaiWrapper>
        )    
    }
    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = (state) => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
})

const mapDispatch = (dispatch) => ({
    getDetail(id) {
        dispatch(actionCreators.getDetailaciton(id))
    }
})

export default connect( mapState, mapDispatch)(Detail);