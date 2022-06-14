import {Field, Form, Formik} from "formik";
import s from "../JokesSearch.module.css";

const RandomForm = (props) => {
    return (
        <Formik
            initialValues={{category: ''}}
            onSubmit={props.getJoke}>
            <Form className={s.random_form}>
                <Field as={'select'} name={'category'} className={s.random}>
                    {props.categories}
                </Field>
                <button>Get random joke</button>
            </Form>
        </Formik>
    )
}

export default RandomForm;