import { fromJS  } from 'immutable'; 
import * as constants from './constants'; 

const defalutState = fromJS({
    title: [],
    content: []
});


export default ( state = defalutState, action ) => {
    switch (action.type) {
        case constants.CHANGEDETIL:
           return (state.merge({
                title: action.title,
                content: action.content
            })
           )
        default:
          return state;
    }
}
