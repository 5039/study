import * as constants from './constants';
import { fromJS } from 'immutable';

// immutable库

const defalutValue = fromJS({
  focused: false,
  list: [],
  listpage: 1,
  listtotalpage: 1,
  mouseIn: false
})

export default (state = defalutValue, action) => {
  return state;
}