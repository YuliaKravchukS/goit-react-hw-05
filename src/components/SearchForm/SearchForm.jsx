import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import css from "./SearchForm.module.css";

const SearchSchema = Yup.object().shape({
  searchInput: Yup.string(),
});

const SearchForm = ({ onSetSearchTitle }) => {
  const handleSubmit = (values) => {
    onSetSearchTitle(values.searchInput);
  };
  return (
    <Formik
      initialValues={{
        searchInput: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={SearchSchema}
    >
      <Form className={css.form}>
        <label>
          <Field
            className={css.searchInput}
            tupe="text"
            name="searchInput"
            placeholder="Enter search title..."
          ></Field>
          <ErrorMessage name="searchInput" component="span" />
        </label>
        <button className={css.searchBtn} type="submit">
          Search 🔍
        </button>
      </Form>
    </Formik>
  );
};
export default SearchForm;
