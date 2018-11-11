import { fromJS  } from 'immutable'; 
import * as constants from './constants'; 

// immutable库

const defalutValue = fromJS ({
    login: false
})

export default ( state = defalutValue, action ) => {
    switch (action.type) {
        default:
          return state;
    }
}
