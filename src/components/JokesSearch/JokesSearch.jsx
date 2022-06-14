import s from './JokesSearch.module.css';
import {useEffect, useState} from "react";
import SearchForm from "./SearchForm/SearchForm";
import RandomForm from "./RandomForm/RandomForm";

const JokesSearch = (props) => {
    useEffect(() => {
        props.getCategories()
    }, []);
    const [search = 'false', setSearch] = useState();

    let categories = [<option key={'none'} value={''}>none</option>, props.categories.map(c => <option key={c}
                                                                                                       value={c}>{c}</option>)];
    let jokes = props.jokes.map((j, index) => <div key={j.value} className={s.joke}><span>{index + 1}. </span>{j.value}
    </div>);

    let getJoke = (values) => {
        props.getJoke(values.category);
        setSearch(false);
    }
    let Search = (values) => {
        if (!/^\d+$/.test(values.query)) {
            props.search(values.query);
            setSearch(true);
        }
    }

    return (
        <div className={s.container}>
            <div className={s.label_container}>
                <h1 className={s.label}>Chuck Norris Jokes</h1>
                <img className={s.logo} src="https://pngimg.com/uploads/chuck_norris/chuck_norris_PNG18.png" alt=""/>
            </div>
            <SearchForm Search={Search}/>
            <div className={s.or}>OR</div>
            <RandomForm getJoke={getJoke} categories={categories}/>
            <div className={s.result}>
                {search ? jokes && <div>
                    {props.total ? <div>total: {props.total}</div> : <></>}
                    {jokes}</div> : props.joke.value && <div>{props.joke.value}</div>}
            </div>
        </div>
    )
}

export default JokesSearch;