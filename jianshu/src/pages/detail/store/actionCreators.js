import axios from "axios";
// import { formJS } from 'immutable';
import * as constants from './constants';

const changeDetail = (title, content) => ({
    type: constants.CHANGEDETIL,
    title: title,
    content: content

})

export const getDetailaciton = (id) =>{
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + id ).then (
            (res) => {
                const result = res.data.data;
                const action = changeDetail(result.title, result.content);
                dispatch(action);
            }
        )
    }
}