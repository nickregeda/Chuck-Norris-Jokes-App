import {connect} from "react-redux";
import JokesSearch from "./JokesSearch";
import {getCategories, getJoke, search} from "../../redux/JokesReducer";

let mapStateToProps = (state) => ({
    joke: state.JokesReducer.joke,
    jokes: state.JokesReducer.jokes,
    total: state.JokesReducer.total,
    categories: state.JokesReducer.categories,
});

export default connect(mapStateToProps, {search, getCategories, getJoke})(JokesSearch);
