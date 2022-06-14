import SearchValidSchema from "../../../FormValidation/SearchValidSchema";
import {ErrorMessage, Field, Form, Formik} from "formik";
import s from "../JokesSearch.module.css";

const SearchForm = (props) => {
    return (
        <Formik
            initialValues={{query: ''}}
            validationSchema={SearchValidSchema}
            onSubmit={props.Search}>
            <Form className={s.search_form}>
                <Field type={'text'} name={'query'} autoComplete={'off'} className={s.search}/>
                <button>Search</button>
                <ErrorMessage className={s.error} name={'query'} component={'div'}/>
            </Form>
        </Formik>
    )
}

export default SearchForm;