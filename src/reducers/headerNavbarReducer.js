import {
    SET_HEADER_LINKS,
    SET_NAVBAR_LINKS
} from '../actions/types';

const INITAL_STATE = {
    headerLinks: [],
    navbarLInks: [
        // {
        //     title: '1980s'
        // },
        // {
       //     title: '1990s'
        // },
        // {
        //     title: '2000s'
        // },
        // {
        //     title: '2010s'
        // }
    ]
} 

export default function(state = INITAL_STATE, action) {
    switch (action.type) {
        case SET_HEADER_LINKS:
            return {
                ...state,
                headerLinks: action.payload
            }
        case SET_NAVBAR_LINKS:
            return {
                ...state,
                navbarLinks: action.payload
            }
        default: return state;
    }
}