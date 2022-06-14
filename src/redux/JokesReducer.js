import {jokesAPI} from "../dal/api";

const SET_JOKE = 'SET_JOKE';
const SET_JOKES = 'SET_JOKES';
const SET_CATEGORIES = 'SET_CATEGORIES';

let initialState = {
    joke: '',
    jokes: [],
    total: 0,
    categories: [],
}

let JokesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOKE:
            return {
                ...state,
                joke: action.joke,
            }
        case SET_JOKES:
            return {
                ...state,
                jokes: action.jokes.result,
                total: action.jokes.total,
            }
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.categories,
            }
        default:
            return state;
    }
}

export default JokesReducer;

//AC
export const setJoke = (joke) => ({type: SET_JOKE, joke});
export const setJokes = (jokes) => ({type: SET_JOKES, jokes});
export const setCategories = (categories) => ({type: SET_CATEGORIES, categories});

//ThC
export const getJoke = (category) => {
    return (dispatch) => {
        if (category) {
            jokesAPI.byCategory(category).then(response => {
                dispatch(setJoke(response.data));
            })
        } else {
            jokesAPI.random().then(response => {
                dispatch(setJoke(response.data));
            })
        }
    }
}
export const getCategories = () => {
    return (dispatch) => {
        jokesAPI.categories().then(response => {
            dispatch(setCategories(response.data));
        })
    }
}
export const search = (query) => {
    return (dispatch) => {
        jokesAPI.search(query).then(response => {
            dispatch(setJokes(response.data));
        })
    }
}