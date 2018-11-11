// import { SEARCH_FOCUS, SEARCH_BLUR } from "./actionTypes";
import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changList = (data) => ({
    type: constants.CHANGE_LIST,
    data: fromJS(data),
    listtotalpage: Math.ceil(data.length / 10)
})

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
    type: constants.SEARCH_BLUR
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const MouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const changePage = (listpage) => ({
    type: constants.CHANGEPAGE_LIST,
    listpage
})


export const getList = () => {
    return (dispatch) => {
        axios.get('./api/headerList.json').then(
          (res)=> {
            const data = res.data;
            dispatch(changList(data.data));
          }
        ).catch(
          ( )=> {
            console.log("4004");
           }
        )
    }
}