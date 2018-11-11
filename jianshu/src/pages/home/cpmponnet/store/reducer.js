import { fromJS  } from 'immutable'; 
import * as constants from './constants'; 

// immutable库

const defalutValue = fromJS ({
    topicList: [],
    articleList: [],
    articlePage: 1,
    showScroll: false
})


const change_hone_data = (state, action) => {
    return (
        state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList)
        })
    )
}

const add_home_list = (state, action) => {
    return (
        state.merge({
            'articleList': state.get('articleList').concat(action.list),
            'articlePage': action.nexPage
        })
    )
}


export default ( state = defalutValue, action ) => {
    switch (action.type) {
        case constants.CHANGE_HONE_DATA:
            return change_hone_data(state, action)
        case constants.ADD_HONE_LIST:
            return add_home_list(state, action)
        case constants.TOOGLT_SCROLL_SHOW: 
            return state.set('showScroll', action.show);     
        default:
          return state;
    }
}
