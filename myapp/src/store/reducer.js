import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../homeRedux/index';

const reducer = combineReducers({
    header: headerReducer
});

export default reducer;