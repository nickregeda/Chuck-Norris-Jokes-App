import * as Yup from "yup";

const SearchValidSchema = Yup.object().shape({
    query: Yup.string()
        .required(""),
});
export default SearchValidSchema;