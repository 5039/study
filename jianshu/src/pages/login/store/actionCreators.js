import axios from 'axios';
// import CHANGE_HONE_DATA from './constants'; 
import * as constants from './constants'; 
import { fromJS } from 'immutable';
// import { List } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HONE_DATA,
    topicList: result.topicList,
    articleList: result.articleList
})


export const getHoneInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then( (res)=> {
            const result = res.data.data;
            // const action = {
            //   type: "change_home_data",
            //   topicList: result.topicList,
            //   articleList: result.articleList
            // }
            const action = changeHomeData(result);
            dispatch(action);
          })
    }
}


const addHomeList = (list, nexPage) => ({
    type: constants.ADD_HONE_LIST,
    list: fromJS(list),
    nexPage
})

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then ( (res) => {
            const result = res.data.data;
            // dispatch(changeHomeData(result));
            // console.log(result)
            dispatch(addHomeList(result, page + 1 ));
          }
        )
    }
}


export const toogleTopShow = (show) => ({
    type: constants.TOOGLT_SCROLL_SHOW,
    show

})
