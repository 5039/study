// import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
import * as constants from './constants';
import { fromJS  } from 'immutable'; 

// immutable库

const defalutValue = fromJS ({
    focused: false,
    list: [],
    listpage: 1,
    listtotalpage: 1,
    mouseIn: false
})

export default ( state = defalutValue, action ) => {
    // if (action.type === constants.SEARCH_FOCUS ) {
    //     // immotabla 对象的set 方法，会结合之前的 immutable 对象的值
    //     // 和设置的值，返回一个全新的对象
    //    return state.set( 'focused', true )
    // }
    // if (action.type === constants.SEARCH_BLUR) {
    //     return state.set( 'focused', false )
    //     // return {
    //     //     focused: false
    //     // }
    // } 
    // if (action.type === constants.CHANGE_LIST) {
    //     return state.set('list', action.data)
    // }
    switch (action.type) {
        case constants.SEARCH_FOCUS:
          return state.set( 'focused', true );
        case constants.SEARCH_BLUR:
          return state.set( 'focused', false );
        case constants.CHANGE_LIST:
          return state.merge({
              list: action.data,
              listtotalpage: action.listtotalpage
          })
        //   return state.set('list', action.data).set('listtotalpage', action.listtotalpage);
        case constants.MOUSE_ENTER:
          return state.set( 'mouseIn', true );
        case constants.MOUSE_LEAVE:
          return state.set( 'mouseIn', false );
        case constants.CHANGEPAGE_LIST:
          return state.set( 'listpage', action.listpage );
        default:
          return state;
    }
}
